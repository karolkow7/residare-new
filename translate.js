
document.addEventListener('DOMContentLoaded', () => {
  const langSelector = document.getElementById('language-selector');
  const storedLang = localStorage.getItem('lang') || 'de';
  setLanguage(storedLang);
  if (langSelector) langSelector.value = storedLang;

  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      const newLang = e.target.value;
      setLanguage(newLang);
      localStorage.setItem('lang', newLang);
    });
  }
});

let translations = {};

function setLanguage(lang) {
  fetch(lang + '.json')
    .then(res => res.json())
    .then(data => {
      translations = data;
      translatePage();
    });
}

function translatePage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) el.innerText = translations[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key]) el.setAttribute('placeholder', translations[key]);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[key]) el.setAttribute('title', translations[key]);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (translations[key]) el.setAttribute('alt', translations[key]);
  });

  translateDropdowns();
}

function translateDropdowns() {
  const transaction = document.getElementById('transaction');
  const property = document.getElementById('property');
  const searchInput = document.getElementById('searchInput');

  if (transaction) {
    transaction.options[0].text = translations['form.transaction.buy'] || 'Kaufen';
    transaction.options[1].text = translations['form.transaction.rent'] || 'Mieten';
  }

  if (property) {
    property.options[0].text = translations['form.property.flat'] || 'Wohnung';
    property.options[1].text = translations['form.property.house'] || 'Haus';
    property.options[2].text = translations['form.property.lokal'] || 'Lokal użytkowy';
    property.options[3].text = translations['form.property.building'] || 'Budynek użytkowy';
  }

  if (searchInput) {
    searchInput.setAttribute('placeholder', translations['form.search.placeholder'] || 'Stadt / Stadtteil / Straße');
  }
}
