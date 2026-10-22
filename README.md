# Timey landing

Russian-language landing site for the Timey tracker. The existing Cloudflare Pages site continues to work.

## Deploy separately to Cloudflare Workers

The landing consists of `index.html` and `history.html`. A tiny build step copies them to `dist/`. The Worker serves those files as Cloudflare Workers Static Assets. This deployment **does not** modify the separate `MarkKab/timey` tracker repository or its `tracker-api` Worker.

### Cloudflare dashboard / Git integration

1. Open **Cloudflare → Workers & Pages → Create application → Import a repository (GitHub)** under Workers.
2. Choose **MarkKab/timey-landing** and select **feat/hero-v1** as the production branch (not the default `main` branch).
3. Configure the Worker name as **timey-landing-worker** (must match `wrangler.jsonc`).
4. Set **Build command** to `npm run build`; **Deploy command** to `npx wrangler deploy`. Root directory: repository root (`/`).
5. Save and deploy. Cloudflare supplies the final `*.workers.dev` URL; do not assume the account subdomain.
6. Test both `/` and `/history.html` through Wi-Fi without a proxy, and verify the Try Timey buttons open `https://tracker-api.mark-kab7.workers.dev/`.

When connecting an already-created Worker through **Settings → Builds**, use the same repository/branch/build/deploy commands and matching Worker name.

### Local build (optional)

```sh
npm install
npm run build
npm run deploy:worker
```

No DNS or custom domain is required for the initial test. The existing Pages site `https://timey-landing.pages.dev/` is not removed or redirected.
