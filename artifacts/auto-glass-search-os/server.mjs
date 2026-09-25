import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const canonicalOrigin = 'https://autoglassgrowth.com';
const publicDir = fileURLToPath(new URL('./dist/public/', import.meta.url));
const port = Number(process.env.PORT || 18694);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

function requestHost(request) {
  const forwarded = request.headers['x-forwarded-host'];
  const value = Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0];
  return (value || request.headers.host || '').trim().toLowerCase().split(':')[0];
}

function resolvePublicFile(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const relativePath = normalize(decodedPath).replace(/^(\.\.(\/|\\|$))+/, '').replace(/^[/\\]+/, '');
  let filePath = join(publicDir, relativePath);

  if (pathname.endsWith('/')) {
    filePath = join(filePath, 'index.html');
  } else if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  } else if (!existsSync(filePath) && !extname(filePath)) {
    filePath = join(filePath, 'index.html');
  }

  if (!filePath.startsWith(publicDir)) return null;
  return filePath;
}

createServer((request, response) => {
  const host = requestHost(request);
  // The API is routed to its own service; only redirect page/asset requests
  // from the default Replit hostname so a POST is never rewritten as a GET.
  if (host === 'www.autoglassgrowth.com' ||
      (host === 'auto-glass-search-os.replit.app' && (request.method === 'GET' || request.method === 'HEAD'))) {
    response.writeHead(301, {
      Location: `${canonicalOrigin}${request.url || '/'}`,
      'Cache-Control': 'public, max-age=3600',
    });
    response.end();
    return;
  }

  const requestUrl = new URL(request.url || '/', canonicalOrigin);
  if (requestUrl.pathname === '/sitemap.xml') {
    response.writeHead(301, {
      Location: `${canonicalOrigin}/sitemap-index.xml`,
      'Cache-Control': 'public, max-age=3600',
    });
    response.end();
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method Not Allowed');
    return;
  }

  const pathname = requestUrl.pathname;
  let filePath;

  try {
    filePath = resolvePublicFile(pathname);
  } catch {
    filePath = null;
  }

  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = join(publicDir, '404.html');
    response.statusCode = 404;
  }

  response.setHeader('Content-Type', contentTypes[extname(filePath).toLowerCase()] || 'application/octet-stream');
  response.setHeader('Cache-Control', extname(filePath) === '.html' ? 'public, max-age=0, must-revalidate' : 'public, max-age=31536000, immutable');

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}).listen(port, '0.0.0.0', () => {
  console.log(`Auto Glass Growth web server listening on port ${port}`);
});