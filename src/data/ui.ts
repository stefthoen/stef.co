// The two languages of the site and the short texts every page shares. The
// text of a page itself is in the page: src/pages/ for Dutch, src/pages/en/
// for English.
export const LANGUAGES = { nl: "Nederlands", en: "English" } as const

export type Lang = keyof typeof LANGUAGES

const nl = {
  description:
    "Ik ben een full-stack webdeveloper. Ik werk vanuit Frankrijk voor Nederlandse klanten.",
  ctaTitle: "Neem contact op!",
  footerAddress: "Postadres",
  footerCountry: "Frankrijk",
  footerContact: "Contact",
  footerAdministration: "Administratie",
  footerLicense: "Alles hier © Creative Commons",
  footerSource: "De broncode staat op GitHub",
}

// Typed after the Dutch texts, so a text that is missing here fails the check.
const en: typeof nl = {
  description:
    "I'm a full-stack web developer. I work from France for Dutch clients.",
  ctaTitle: "Get in touch!",
  footerAddress: "Postal address",
  footerCountry: "France",
  footerContact: "Contact",
  footerAdministration: "Administration",
  footerLicense: "Everything here © Creative Commons",
  footerSource: "Source is on GitHub",
}

export const UI = { nl, en }
