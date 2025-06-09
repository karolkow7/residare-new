
const translations = {};
let currentLanguage = localStorage.getItem('language') || 'de';

function loadTranslations(lang) {
  return fetch(`${lang}.json`)
    .then(response => response.json())
    .then(data => {
      translations[lang] = data;
      return data;
    });
}

function applyTranslations() {
  const lang = currentLanguage;
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });
}

function changeLanguage(lang) {
  localStorage.setItem('language', lang);
  currentLanguage = lang;
  if (!translations[lang]) {
    loadTranslations(lang).then(applyTranslations);
  } else {
    applyTranslations();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadTranslations(currentLanguage).then(applyTranslations);
  const selector = document.getElementById('language-selector');
  if (selector) {
    selector.value = currentLanguage;
    selector.addEventListener('change', e => {
      changeLanguage(e.target.value);
    });
  }
});
