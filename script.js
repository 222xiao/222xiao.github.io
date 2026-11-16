const languageButton = document.querySelector('.language-toggle');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-nav');
const savedLanguage = localStorage.getItem('language') === 'zh' ? 'zh' : 'en';

function setLanguage(language) {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  languageButton.textContent = language === 'zh' ? 'English' : '中文';
  languageButton.setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
  localStorage.setItem('language', language);
}

setLanguage(savedLanguage);
languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
