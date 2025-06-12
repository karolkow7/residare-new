document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    de: {
      "nav.home": "Start",
      "nav.listings": "Angebote",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.impress": "Impressum",
      "nav.agb": "AGB",
      "nav.favorites": "Favoriten",
      "nav.post": "Inserieren",
      "nav.login": "Einloggen",
      "hero.title": "Finden Sie Ihre Immobilie in Polen",
      "hero.subtitle": "Grenzüberschreitend. Einfach. Residare.",
      "property.flat": "Wohnung",
      "property.house": "Haus",
      "property.lokal": "Gewerbeeinheit",
      "property.building": "Nutzgebäude",
      "transaction.buy": "Kaufen",
      "transaction.rent": "Mieten",
      "search.placeholder": "Ort oder Postleitzahl eingeben",
      "search.button": "Suchen",
      "regions.title": "Top-Regionen",
      "region.gdansk": "Danzig",
      "region.swinemuende": "Swinemünde",
      "region.misdroy": "Misdroy",
      "why.title": "Warum Residare?",
      "why.one": "Verlässliche Partner in Deutschland und Polen",
      "why.two": "Zweisprachige Abwicklung ohne Missverständnisse",
      "why.three": "Unabhängig, bodenständig und leicht erreichbar",
      "cta.title": "Jetzt unverbindlich Kontakt aufnehmen",
      "cta.button": "Kontaktformular öffnen"
    },
    pl: {
      "nav.home": "Start",
      "nav.listings": "Oferty",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.impress": "Impressum",
      "nav.agb": "Regulamin",
      "nav.favorites": "Ulubione",
      "nav.post": "Dodaj ogłoszenie",
      "nav.login": "Zaloguj się",
      "hero.title": "Znajdź swoją nieruchomość w Polsce",
      "hero.subtitle": "Ponad granicami. Łatwo. Residare.",
      "property.flat": "Mieszkanie",
      "property.house": "Dom",
      "property.lokal": "Lokal użytkowy",
      "property.building": "Budynek użytkowy",
      "transaction.buy": "Kupno",
      "transaction.rent": "Wynajem",
      "search.placeholder": "Miejscowość lub kod pocztowy",
      "search.button": "Szukaj",
      "regions.title": "Najlepsze regiony",
      "region.gdansk": "Gdańsk",
      "region.swinemuende": "Świnoujście",
      "region.misdroy": "Międzyzdroje",
      "why.title": "Dlaczego Residare?",
      "why.one": "Partnerzy w Niemczech i Polsce",
      "why.two": "Dwujęzyczna obsługa bez nieporozumień",
      "why.three": "Niezależni, rzeczowi, dostępni",
      "cta.title": "Skontaktuj się z nami bez zobowiązań",
      "cta.button": "Otwórz formularz kontaktowy"
    }
  };

  const selector = document.getElementById("language-selector");

  function updateLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === "OPTION") {
          el.textContent = translations[lang][key];
        } else if (el.placeholder !== undefined) {
          el.placeholder = translations[lang][key];
        } else {
          const icon = el.querySelector("i");
          if (icon && el.childNodes.length > 1) {
            for (let i = 0; i < el.childNodes.length; i++) {
              const node = el.childNodes[i];
              if (node.nodeType === Node.TEXT_NODE) {
                node.textContent = " " + translations[lang][key];
                break;
              }
            }
          } else {
            el.textContent = translations[lang][key];
          }
        }
      }
    });

    document.querySelectorAll("[data-translate]").forEach(el => {
      const langAttr = el.getAttribute("data-lang");
      el.style.display = langAttr === lang ? "block" : "none";
    });
  }

  if (selector) {
    selector.addEventListener("change", e => {
      const lang = e.target.value;
      updateLanguage(lang);
    });
    updateLanguage(selector.value || "de");
  }
});