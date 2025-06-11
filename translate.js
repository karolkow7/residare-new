document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    de: {,
    "nav.agb": "AGB",
    "nav.privacy": "Datenschutz",
    "agb.title": "Allgemeine Gesch\u00e4ftsbedingungen (AGB)",
    "agb.scope": "1. Geltungsbereich",
    "agb.scope.text": "Diese AGB gelten f\u00fcr alle Nutzer der Online-Plattform Residare (nachfolgend \u201eResidare\u201c genannt), betrieben durch den Einzelunternehmer Paul Smith.",
    "agb.services": "2. Leistungen",
    "agb.services.text": "Residare bietet Immobilienanzeigen an, ist jedoch nicht als Makler t\u00e4tig.",
    "agb.costs": "3. Kostenpflichtige Dienste",
    "agb.costs.text": "F\u00fcr bestimmte Funktionen k\u00f6nnen in Zukunft Geb\u00fchren anfallen.",
    "agb.withdrawal": "4. Widerrufsrecht",
    "agb.withdrawal.text": "Verbraucher haben ein gesetzliches Widerrufsrecht von 14 Tagen.",
    "agb.liability": "5. Haftung",
    "agb.liability.text": "Keine Haftung f\u00fcr externe Inhalte oder veraltete Informationen.",
    "agb.law": "6. Anwendbares Recht",
    "agb.law.text": "Es gilt deutsches Recht. Gerichtsstand ist der Sitz des Betreibers.",
    "agb.language": "7. Sprache",
    "agb.language.text": "Rechtsverbindlich ist ausschlie\u00dflich die deutsche Version.",
    "privacy.title": "Datenschutzerkl\u00e4rung"
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
    pl: {,
    "nav.agb": "OWH",
    "nav.privacy": "Ochrona danych",
    "agb.title": "Og\u00f3lne Warunki Handlowe (OWH)",
    "agb.scope": "1. Zakres obowi\u0105zywania",
    "agb.scope.text": "Niniejsze OWH obowi\u0105zuj\u0105 wszystkich u\u017cytkownik\u00f3w platformy Residare, prowadzonej przez przedsi\u0119biorc\u0119 indywidualnego Paul Smith.",
    "agb.services": "2. Us\u0142ugi",
    "agb.services.text": "Residare oferuje og\u0142oszenia nieruchomo\u015bci, ale nie dzia\u0142a jako po\u015brednik.",
    "agb.costs": "3. Us\u0142ugi p\u0142atne",
    "agb.costs.text": "Niekt\u00f3re funkcje mog\u0105 w przysz\u0142o\u015bci wi\u0105za\u0107 si\u0119 z op\u0142atami.",
    "agb.withdrawal": "4. Prawo do odst\u0105pienia od umowy",
    "agb.withdrawal.text": "Konsumenci maj\u0105 prawo do odst\u0105pienia od umowy w ci\u0105gu 14 dni.",
    "agb.liability": "5. Odpowiedzialno\u015b\u0107",
    "agb.liability.text": "Brak odpowiedzialno\u015bci za tre\u015bci zewn\u0119trzne lub nieaktualne informacje.",
    "agb.law": "6. Obowi\u0105zuj\u0105ce prawo",
    "agb.law.text": "Obowi\u0105zuje prawo niemieckie. Miejscem jurysdykcji jest siedziba operatora.",
    "agb.language": "7. J\u0119zyk",
    "agb.language.text": "Obowi\u0105zuj\u0105c\u0105 wersj\u0105 jest wy\u0142\u0105cznie wersja niemiecka.",
    "privacy.title": "Polityka prywatno\u015bci"
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
          el.innerText = translations[lang][key];
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