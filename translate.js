document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    de: {
      "nav.home": "Start",
      "nav.listings": "Angebote",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.impress": "Impressum",
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
      "why.one": "Grenzüberschreitender Fokus",
      "why.two": "Einfache, KI-gestützte Übersetzung",
      "why.three": "Unabhängig und flexibel",
      "cta.title": "Jetzt unverbindlich Kontakt aufnehmen",
      "cta.button": "Kontaktformular öffnen",
      "contact.title": "Kontaktformular",
      "contact.name": "Ihr Name",
      "contact.email": "Ihre E-Mail",
      "contact.message": "Nachricht",
      "contact.send": "Absenden",
      "impressum.title": "Impressum",
      "impressum.owner": "Angaben gemäß §5 TMG:\nResidare GmbH\nMusterstraße 1\n12345 Berlin",
      "impressum.represented": "Vertreten durch:\nMax Mustermann",
      "impressum.contact": "Kontakt:\nE-Mail: kontakt@residare.de\nTelefon: +49 123 456789",
      "impressum.legal": "Verantwortlich für den Inhalt nach §55 Abs. 2 RStV:\nMax Mustermann, Anschrift wie oben",
      "listings.title": "Aktuelle Immobilienangebote",
      "listings.more": "Mehr erfahren"
    },
    pl: {
      "nav.home": "Start",
      "nav.listings": "Oferty",
      "nav.faq": "FAQ",
      "nav.contact": "Kontakt",
      "nav.impress": "Impressum",
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
      "why.one": "Transgraniczne podejście",
      "why.two": "Łatwe tłumaczenie oparte na AI",
      "why.three": "Niezależność i elastyczność",
      "cta.title": "Skontaktuj się z nami bez zobowiązań",
      "cta.button": "Otwórz formularz kontaktowy",
      "contact.title": "Formularz kontaktowy",
      "contact.name": "Imię i nazwisko",
      "contact.email": "Twój e-mail",
      "contact.message": "Wiadomość",
      "contact.send": "Wyślij",
      "impressum.title": "Impressum",
      "impressum.owner": "Informacje zgodnie z §5 TMG:\nResidare GmbH\nul. Przykładowa 1\n12345 Berlin",
      "impressum.represented": "Reprezentowany przez:\nMax Mustermann",
      "impressum.contact": "Kontakt:\nE-Mail: kontakt@residare.de\nTelefon: +49 123 456789",
      "impressum.legal": "Odpowiedzialny za treść zgodnie z §55 ust. 2 RStV:\nMax Mustermann, adres jak wyżej",
      "listings.title": "Aktualne oferty nieruchomości",
      "listings.more": "Zobacz więcej"
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
  // Ersetze nur den Textknoten, nicht HTML oder Symbole
  const icon = el.querySelector("i");
  el.childNodes.forEach(n => {
    if (n.nodeType === Node.TEXT_NODE) {
      n.textContent = " " + translations[lang][key];
    }
  });
}

      }
    });

    document.querySelectorAll("[data-translate]").forEach(el => {
      const langAttr = el.getAttribute("data-lang");
      if (langAttr) {
        el.style.display = langAttr === lang ? "block" : "none";
      }
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