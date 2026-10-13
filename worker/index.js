// Sends www and plain http to the main domain. Everything else is the static
// site in dist/.
const CANONICAL_HOST = "stef.co"

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    const isPreview =
      url.hostname.endsWith(".workers.dev") || url.hostname === "localhost"
    if (
      !isPreview &&
      (url.hostname !== CANONICAL_HOST || url.protocol !== "https:")
    ) {
      url.hostname = CANONICAL_HOST
      url.protocol = "https:"
      return Response.redirect(url.toString(), 301)
    }
    return env.ASSETS.fetch(request)
  },
}
