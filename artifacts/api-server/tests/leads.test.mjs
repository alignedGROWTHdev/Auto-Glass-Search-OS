import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import { build } from 'esbuild';

// Bundle the real route and generated validation, replacing only the connector.
// These tests cannot write to HubSpot.
const compiled = await build({
  entryPoints: [new URL('../src/routes/leads.ts', import.meta.url).pathname],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'cjs',
  plugins: [{
    name: 'mock-hubspot',
    setup(builder) {
      builder.onResolve({ filter: /^@replit\/connectors-sdk$/ }, () => ({
        path: 'hubspot-test-double',
        namespace: 'test-double',
      }));
      builder.onLoad({ filter: /.*/, namespace: 'test-double' }, () => ({
        contents: `export class ReplitConnectors {
          async proxy(...args) { return globalThis.__leadTestProxy(...args); }
        }`,
      }));
    },
  }],
});
const module = { exports: {} };
new Function('require', 'module', 'exports', compiled.outputFiles[0].text)(
  createRequire(import.meta.url), module, module.exports,
);
const handler = module.exports.default.stack.find(layer => layer.route?.path === '/leads')
  .route.stack[0].handle;

async function submit(body, foundContact = false) {
  const calls = [];
  globalThis.__leadTestProxy = async (provider, path, options) => {
    calls.push({ provider, path, method: options.method, body: JSON.parse(options.body) });
    return Response.json(path.endsWith('/search')
      ? { results: foundContact ? [{ id: 'mock-existing-contact' }] : [] }
      : { id: 'mock-contact' });
  };
  const result = { status: 200 };
  const response = {
    status(code) { result.status = code; return this; },
    json(body) { result.body = body; return this; },
  };
  try {
    await handler({ body, log: { info() {}, warn() {}, error() {} } }, response);
    return { ...result, calls };
  } finally {
    delete globalThis.__leadTestProxy;
  }
}

const required = {
  name: 'Test Operator',
  email: 'test-operator@example.invalid',
  website: 'https://example.invalid',
};

test('creates a contact without company, phone or markets', async () => {
  const result = await submit(required);
  assert.equal(result.status, 200);
  assert.deepEqual(result.body, { success: true });
  const write = result.calls[1];
  assert.equal(write.method, 'POST');
  assert.equal(write.path, '/crm/v3/objects/contacts');
  assert.equal(write.body.properties.email, required.email);
  assert.equal(write.body.properties.firstname, 'Test');
  for (const key of ['phone', 'company', 'city']) {
    assert.equal(Object.hasOwn(write.body.properties, key), false);
  }
});

test('accepts empty optional fields without erasing existing contact values', async () => {
  const result = await submit({ ...required, company: '', phone: '   ', primaryMarkets: '' }, true);
  assert.equal(result.status, 200);
  const write = result.calls[1];
  assert.equal(write.method, 'PATCH');
  for (const key of ['phone', 'company', 'city']) {
    assert.equal(Object.hasOwn(write.body.properties, key), false);
  }
});

test('preserves optional values when supplied', async () => {
  const result = await submit({ ...required, company: ' Glass Shop ', phone: ' 7205550100 ', primaryMarkets: ' Denver ' });
  assert.equal(result.status, 200);
  assert.equal(result.calls[1].body.properties.company, 'Glass Shop');
  assert.equal(result.calls[1].body.properties.phone, '7205550100');
  assert.equal(result.calls[1].body.properties.city, 'Denver');
});

test('minimal honeypot returns 200 without contacting HubSpot', async () => {
  const result = await submit({ ...required, honey: 'do-not-write' });
  assert.equal(result.status, 200);
  assert.deepEqual(result.body, { success: true });
  assert.equal(result.calls.length, 0);
});

test('name, email and website remain required', async () => {
  for (const key of Object.keys(required)) {
    const body = { ...required };
    delete body[key];
    const result = await submit(body);
    assert.equal(result.status, 400);
    assert.equal(result.calls.length, 0);
  }
});
