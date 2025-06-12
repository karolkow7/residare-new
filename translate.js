document.addEventListener("DOMContentLoaded", function () {
  const translations = {
    de: {
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
      "nav.blog": "Blog"
    },
    pl: {
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
      "nav.blog": "Blog"
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