const translations = {
  de: {
    "nav.home": "Start",
    "nav.listings": "Angebote",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "nav.impress": "Impressum",
    "nav.agb": "AGB",
    "nav.privacy": "Datenschutz",
    "agb.title": "Allgemeine Geschäftsbedingungen (AGB)",
    "privacy.title": "Datenschutzerklärung"
  },
  pl: {
    "nav.home": "Start",
    "nav.listings": "Oferty",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",
    "nav.impress": "Nota prawna",
    "nav.agb": "OWH",
    "nav.privacy": "Ochrona danych",
    "agb.title": "Ogólne Warunki Handlowe (OWH)",
    "privacy.title": "Polityka prywatności"
  }
};

function translatePage(lang) {
  // data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // data-lang Sichtbarkeit
  document.querySelectorAll("[data-lang='de']").forEach(el => {
    el.style.display = (lang === "de") ? "" : "none";
  });
  document.querySelectorAll("[data-lang='pl']").forEach(el => {
    el.style.display = (lang === "pl") ? "" : "none";
  });

  // Sprache merken
  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-selector");
  const saved = localStorage.getItem("language") || "de";
  selector.value = saved;
  translatePage(saved);
  selector.addEventListener("change", () => {
    translatePage(selector.value);
  });
});