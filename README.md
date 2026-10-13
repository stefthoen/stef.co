# stef.co

The consultancy site of Stef Thoen, a static [Astro](https://astro.build) site. It
was a Gatsby 2 site until October 2026; the port kept the content and the design as
they were.

## Working on it

```
npm install
npm run dev       # http://localhost:4321
npm run check     # check types and build to dist/
npm run preview   # look at the built site
npm run format    # prettier
```

Needs Node 22.12 or newer.

## Where things are

| Path                        | What                                                          |
| --------------------------- | ------------------------------------------------------------- |
| `src/pages/index.astro`     | The home page in Dutch, at `/`                                |
| `src/pages/en/index.astro`  | The home page in English, at `/en/`                           |
| `src/pages/chessable.astro` | Pitch pages for one company each (English), not linked from   |
| `src/pages/code23.astro`    | the home page                                                 |
| `src/pages/orchest.astro`   |                                                               |
| `src/layouts/Base.astro`    | The frame of every page: head, contact box, flag, footer      |
| `src/components/`           | The blocks the pages are built from                           |
| `src/components/cases/`     | One project each, with its testimonial; for the pitch pages   |
| `src/styles/site.css`       | The whole design: tokens, typography, one block per component |
| `src/data/site.ts`          | Site title and Twitter handle                                 |
| `src/data/ui.ts`            | The short texts every page shares, in both languages          |
| `src/images/`, `src/svgs/`  | Photo, screenshots, icons and flags; Astro resizes the images |
| `public/`                   | Favicons, copied as they are                                  |
| `worker/index.js`           | Redirects www and plain http to the main domain               |

## Two languages

The home page exists in Dutch and in English. Each language has its own page file
with the full text, so a change to one needs the same change in the other. The
texts in the contact box and the footer are in `src/data/ui.ts`.

A page that passes `alternate` to `Base` gets a flag in the top right corner that
links to the same page in the other language:

```astro
<Base lang="nl" alternate="/en/">
```

The pitch pages are in English only and have no flag.

## Whitespace in templates

Astro 7 treats whitespace like JSX: a line break between text and a tag is dropped.
Where a space is needed across a line break, write `{" "}`, as in

```astro
Oktober 2013 vertrok ik met mijn vrouw en{" "}
<a href="http://joepdezoeperd.nl">Joep de Zoeperd</a> en ben ik ...
```

Prettier keeps these in place.

## Deploying

The site runs on Cloudflare as a Worker with static assets (`wrangler.jsonc`). For
this `wrangler` has to be logged in to the Cloudflare account that holds the stef.co
zone.

```
npm run deploy                                  # check, build and put it live
npm run check && npx wrangler versions upload   # a preview only, live stays as it is
```

`versions upload` prints an address for that one version. The Worker also answers on
<https://stef-co.stef-cloudflare.workers.dev>.

stef.co and www.stef.co are routes on the Worker; each needs a proxied DNS record in
Cloudflare. `worker/index.js` sends www and plain http to <https://stef.co>.

Netlify, where the site was hosted before, still builds every push until the site
there (`stef-gatsby`) is removed; `netlify.toml` can go with it.
