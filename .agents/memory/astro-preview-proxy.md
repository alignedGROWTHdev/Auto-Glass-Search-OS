---
name: Astro previews on Replit
description: Replit proxy compatibility constraints for Astro development previews.
---

For Astro development servers, explicitly allow Replit preview domains rather than relying on a broad boolean host setting. If the browser console shows a repeated 403 for Astro’s development-toolbar module under `/@fs/`, disable the dev toolbar.

**Why:** The app itself can return 200 through the public preview while Vite still rejects the public host or the proxied toolbar module, producing misleading console errors and blocking browser-based QA.

**How to apply:** When an Astro preview is unreachable or logs a resource-level 403 on Replit, check the exact failed URL. Add `.replit.dev` preview hosts to the Astro/Vite allowlist and disable only the dev toolbar when that toolbar entrypoint is the failing resource.