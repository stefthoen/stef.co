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
| `src/pages/index.astro`     | The home page (Dutch)                                         |
| `src/pages/chessable.astro` | Pitch pages for one company each (English), not linked from   |
| `src/pages/code23.astro`    | the home page                                                 |
| `src/pages/orchest.astro`   |                                                               |
| `src/layouts/Base.astro`    | The frame of every page: head, contact box, footer            |
| `src/components/`           | The blocks the pages are built from                           |
| `src/components/cases/`     | One project each, with its testimonial (English)              |
| `src/styles/site.css`       | The whole design: tokens, typography, one block per component |
| `src/data/site.ts`          | Site title, description and Twitter handle                    |
| `src/images/`, `src/svgs/`  | Photo, screenshots and icons; Astro resizes the images        |
| `public/`                   | Favicons, copied as they are                                  |

## Whitespace in templates

Astro 7 treats whitespace like JSX: a line break between text and a tag is dropped.
Where a space is needed across a line break, write `{" "}`, as in

```astro
Oktober 2013 vertrok ik met mijn vrouw en{" "}
<a href="http://joepdezoeperd.nl">Joep de Zoeperd</a> en ben ik ...
```

Prettier keeps these in place.

## Deploying

Netlify builds the site with `npm run build` and serves `dist/`; the settings are in
`netlify.toml`.
