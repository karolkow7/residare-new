document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    de: {
      "hero.dream": "Finden Sie Ihre Traumimmobilie in Polen",
      "nav.home": "Start",
      "nav.listings": "Angebote",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.impress": "Impressum",
      "nav.agb": "AGB",
      "nav.privacy": "Datenschutz",
      "nav.favorites": "Favoriten",
      "nav.post": "Inserieren",
      "nav.login": "Einloggen",
      "nav.blog": "Blog",
      "hero.title": "Finden Sie Ihre Immobilie in Polen",
      "hero.subtitle": "Grenzüberschreitend. Einfach. Residare.",
      "transaction.buy": "Kaufen",
      "transaction.rent": "Mieten",
      "property.flat": "Wohnung",
      "property.house": "Haus",
      "property.lokal": "Gewerbeeinheit",
      "property.building": "Nutzgebäude",
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
      "hero.dream": "Znajdź swoją wymarzoną nieruchomość w Polsce",
      "nav.home": "Start",
      "nav.listings": "Oferty",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.impress": "Impressum",
      "nav.agb": "Regulamin",
      "nav.privacy": "Ochrona danych",
      "nav.favorites": "Ulubione",
      "nav.post": "Dodaj ogłoszenie",
      "nav.login": "Zaloguj się",
      "nav.blog": "Blog",
      "hero.title": "Znajdź swoją nieruchomość w Polsce",
      "hero.subtitle": "Ponad granicami. Łatwo. Residare.",
      "transaction.buy": "Kupno",
      "transaction.rent": "Wynajem",
      "property.flat": "Mieszkanie",
      "property.house": "Dom",
      "property.lokal": "Lokal użytkowy",
      "property.building": "Budynek użytkowy",
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
          let replaced = false;
          el.childNodes.forEach(n => {
            if (n.nodeType === Node.TEXT_NODE && n.textContent.trim() !== "") {
              n.textContent = " " + translations[lang][key];
              replaced = true;
            }
          });
          if (!replaced) {
            const newText = document.createTextNode(translations[lang][key]);
            el.appendChild(newText);
          }
        }
      }
    });

    document.querySelectorAll("[data-translate]").forEach(el => {
      const langAttr = el.getAttribute("data-lang");
      el.style.display = langAttr === lang ? "block" : "none";
    });
  }

  const selector = document.getElementById("language-selector");
  if (selector) {
    selector.addEventListener("change", e => {
      const lang = e.target.value;
      updateLanguage(lang);
    });
    updateLanguage(selector.value || "de");
  }
});