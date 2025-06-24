
let currentLanguage = localStorage.getItem("lang") || "de";

function updateLanguage() {
  const lang = currentLanguage;
  const dict = translations[lang] || {};

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (value) el.innerText = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = dict["placeholder." + key];
    if (value) el.setAttribute("placeholder", value);
  });

  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    const value = dict[key];
    if (value) el.setAttribute("title", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.getAttribute("data-i18n-alt");
    const value = dict[key];
    if (value) el.setAttribute("alt", value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("language-select");
  if (select) {
    select.value = currentLanguage;
    select.addEventListener("change", e => {
      currentLanguage = e.target.value;
      localStorage.setItem("lang", currentLanguage);
      updateLanguage();
    });
  }
  updateLanguage();
});

const translations = {
  de: {
  "transaction.buy": "Kaufen",
  "transaction.rent": "Mieten",
  "property.flat": "Wohnung",
  "property.house": "Haus",
  "property.lokal": "Gewerbeeinheit",
  "property.building": "Nutzgebäude",
  "search.placeholder": "Ort oder Postleitzahl eingeben",
  "search.button": "Suchen",
  "nav.contact": "Kontakt",
  "nav.agb": "AGB",
  "nav.privacy": "Datenschutz",
  "nav.impress": "Impressum",
  "nav.login": "Einloggen",
  "nav.post": "Inserieren",
  "nav.favorites": "Favoriten",
  "nav.blog": "Blog",
  "auto._2025_residare": "© 2025 Residare",
  "placeholder.name": "Ihr Name",
  "placeholder.email": "Ihre E-Mail"
},
  pl: {
  "transaction.buy": "",
  "transaction.rent": "",
  "property.flat": "",
  "property.house": "",
  "property.lokal": "",
  "property.building": "",
  "search.placeholder": "",
  "search.button": "",
  "nav.contact": "",
  "nav.agb": "",
  "nav.privacy": "",
  "nav.impress": "",
  "nav.login": "",
  "nav.post": "",
  "nav.favorites": "",
  "nav.blog": "",
  "auto._2025_residare": "",
  "placeholder.name": "",
  "placeholder.email": ""
}
};
