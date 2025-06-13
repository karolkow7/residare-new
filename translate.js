
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
      "regions.popular": "Beliebteste Regionen",
      "regions.title": "Beliebteste Regionen",
      "region.gdansk": "Danzig",
      "region.swinemuende": "Swinemünde",
      "region.misdroy": "Misdroy",
      "why.title": "Warum Residare?",
      "why.one": "Verlässliche Partner in Deutschland und Polen",
      "why.two": "Zweisprachige Abwicklung ohne Missverständnisse",
      "why.three": "Unabhängig, bodenständig und leicht erreichbar",
      "cta.title": "Jetzt unverbindlich Kontakt aufnehmen",
      "cta.button": "Kontaktformular öffnen",
      "contact.title": "Kontaktformular",
      "contact.name": "Ihr Name",
      "contact.email": "Ihre E-Mail",
      "contact.message": "Nachricht",
      "contact.send": "Absenden"
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
      "regions.popular": "Najpopularniejsze regiony",
      "regions.title": "Najpopularniejsze regiony",
      "region.gdansk": "Gdańsk",
      "region.swinemuende": "Świnoujście",
      "region.misdroy": "Międzyzdroje",
      "why.title": "Dlaczego Residare?",
      "why.one": "Partnerzy w Niemczech i Polsce",
      "why.two": "Dwujęzyczna obsługa bez nieporozumień",
      "why.three": "Niezależni, rzeczowi, dostępni",
      "cta.title": "Skontaktuj się z nami bez zobowiązań",
      "cta.button": "Otwórz formularz kontaktowy",
      "contact.title": "Formularz kontaktowy",
      "contact.name": "Twoje imię",
      "contact.email": "Twój e-mail",
      "contact.message": "Wiadomość",
      "contact.send": "Wyślij"
    }
  };

  function updateLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const value = translations[lang]?.[key];
      if (!value) return;

      if (el.tagName === "OPTION" || el.tagName === "LABEL") {
        el.textContent = value;
      } else if (el.placeholder !== undefined) {
        el.placeholder = value;
      } else if (el.hasAttribute("title")) {
        el.setAttribute("title", value);
      } else if (el.hasAttribute("alt")) {
        el.setAttribute("alt", value);
      } else {
        el.innerText = value; // direkte und robuste Übersetzung
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
