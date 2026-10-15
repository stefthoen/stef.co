// @ts-check
import { defineConfig } from "astro/config"

// Static build; Cloudflare serves dist/ (see wrangler.jsonc).
export default defineConfig({
  site: "https://stef.co",
})
