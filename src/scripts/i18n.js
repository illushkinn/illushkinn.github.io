// ===== i18n =====
const i18n = {
  en: {
    'nav-contact': 'Contact',
    'tag-1': 'AI + Accessibility',
    'tag-2': 'Government',
    'tag-3': 'LATAM',
    'hero-title': 'Government digital that<br><span class="highlight">actually works.</span>',
    'hero-sub': 'WCAG compliance, AI-accelerated. No jargon. No excuses.',
    'btn-primary': 'Start a conversation',
    'section-contact-label': 'Contact',
    'section-contact-title': "Let's talk.",
    'section-contact-desc': 'One conversation can change everything.',
    'footer-text': '\u00A9 2026 \u00B7 Illya Grytsyk \u00B7 Mar del Plata, Argentina',
    'skip-link': 'Skip to main content',
    'nav-label': 'Main navigation',
    'lang-aria': 'Select language',
    'lang-en': 'English',
    'lang-es': 'Spanish',
    'lang-ua': 'Ukrainian',
    'lang-ru': 'Russian'
  },
  es: {
    'nav-contact': 'Contacto',
    'tag-1': 'IA + Accesibilidad',
    'tag-2': 'Gobierno',
    'tag-3': 'LATAM',
    'hero-title': 'Digital estatal que<br><span class="highlight">realmente funciona.</span>',
    'hero-sub': 'Cumplimiento WCAG, acelerado con IA. Sin jerga. Sin excusas.',
    'btn-primary': 'Conversemos',
    'section-contact-label': 'Contacto',
    'section-contact-title': 'Hablemos.',
    'section-contact-desc': 'Una conversación puede cambiarlo todo.',
    'footer-text': '\u00A9 2026 \u00B7 Illya Grytsyk \u00B7 Mar del Plata, Argentina',
    'skip-link': 'Saltar al contenido principal',
    'nav-label': 'Navegación principal',
    'lang-aria': 'Seleccionar idioma',
    'lang-en': 'Inglés',
    'lang-es': 'Español',
    'lang-ua': 'Ucraniano',
    'lang-ru': 'Ruso'
  },
  ua: {
    'nav-contact': 'Контакти',
    'tag-1': 'ШІ + Доступність',
    'tag-2': 'Уряд',
    'tag-3': 'LATAM',
    'hero-title': 'Державний цифровий сервіс,<br><span class="highlight">який реально працює.</span>',
    'hero-sub': 'WCAG сумісність, прискорена ШІ. Без жаргону. Без виправдань.',
    'btn-primary': 'Почати розмову',
    'section-contact-label': 'Контакти',
    'section-contact-title': 'Поговорімо.',
    'section-contact-desc': 'Одна розмова може змінити все.',
    'footer-text': '\u00A9 2026 \u00B7 Ілля Грицик \u00B7 Мар-дель-Плата, Аргентина',
    'skip-link': 'Перейти до основного вмісту',
    'nav-label': 'Головна навігація',
    'lang-aria': 'Вибрати мову',
    'lang-en': 'Англійська',
    'lang-es': 'Іспанська',
    'lang-ua': 'Українська',
    'lang-ru': 'Російська'
  },
  ru: {
    'nav-contact': 'Контакты',
    'tag-1': 'ИИ + Доступность',
    'tag-2': 'Государство',
    'tag-3': 'LATAM',
    'hero-title': 'Государственный цифровой сервис,<br><span class="highlight">который реально работает.</span>',
    'hero-sub': 'WCAG-совместимость, ускоренная ИИ. Без жаргона. Без оправданий.',
    'btn-primary': 'Начать разговор',
    'section-contact-label': 'Контакты',
    'section-contact-title': 'Поговорим.',
    'section-contact-desc': 'Один разговор может изменить всё.',
    'footer-text': '\u00A9 2026 \u00B7 Илья Грицик \u00B7 Мар-дель-Плата, Аргентина',
    'skip-link': 'Перейти к основному содержанию',
    'nav-label': 'Основная навигация',
    'lang-aria': 'Выбрать язык',
    'lang-en': 'Английский',
    'lang-es': 'Испанский',
    'lang-ua': 'Украинский',
    'lang-ru': 'Русский'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelector('.skip-link').textContent = t['skip-link'];
  document.querySelector('.nav').setAttribute('aria-label', t['nav-label']);
  const select = document.getElementById('langSelect');
  if (select) select.value = lang;
  document.getElementById('nav-contact').textContent = t['nav-contact'];
  document.getElementById('tag-1').textContent = t['tag-1'];
  document.getElementById('tag-2').textContent = t['tag-2'];
  document.getElementById('tag-3').textContent = t['tag-3'];
  document.getElementById('hero-title').innerHTML = t['hero-title'];
  document.getElementById('hero-sub').textContent = t['hero-sub'];
  document.getElementById('btn-primary').textContent = t['btn-primary'];
  document.getElementById('section-contact-label').textContent = t['section-contact-label'];
  document.getElementById('section-contact-title').innerHTML = t['section-contact-title'];
  document.getElementById('section-contact-desc').textContent = t['section-contact-desc'];
  document.getElementById('footer-text').textContent = t['footer-text'];
  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('langSelect');
  if (select) {
    select.addEventListener('change', function() {
      applyLang(this.value);
    });
  }
  applyLang(currentLang);
});
