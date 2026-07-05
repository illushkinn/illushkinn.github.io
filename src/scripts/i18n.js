// ===== i18n =====
const i18n = {
  en: {
    'nav-work': 'Work',
    'nav-approach': 'Approach',
    'nav-contact': 'Contact',
    'tag-1': 'AI Engineer',
    'tag-2': 'Accessibility',
    'tag-3': 'Growth Partner',
    'hero-title': 'Digital accessibility<br>isn\'t just compliance.<span class="highlight">It\'s strategy.</span>',
    'hero-sub': 'Government digital that works. AI-powered WCAG audits. UX people actually like.',
    'btn-primary': 'Start a conversation',
    'btn-secondary': 'See my work',
    'section-work-label': 'Focus Areas',
    'section-work-title': 'Where I <span class="text-accent">operate</span>.',
    'card-1-title': 'Government & Public Admin',
    'card-1-desc': 'WCAG audits to full remediation. Argentina first, LATAM next.',
    'card-2-title': 'Digital Accessibility',
    'card-2-desc': 'Built for neurodivergent users. AI-accelerated. WCAG compliant.',
    'card-3-title': 'AI Automation',
    'card-3-desc': 'AI agents for government. From CRM to accessibility reports.',
    'card-4-title': 'Growth Partner',
    'card-4-desc': 'Digital presence that converts. Strategy + execution.',
    'section-approach-label': 'How I Build',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, human-centered.',
    'card-a1-title': 'OKLCH Design Systems',
    'card-a1-desc': 'OKLCH color architecture. Perceptually uniform. Accessible by default.',
    'card-a2-title': 'Spec-First Development',
    'card-a2-desc': '6 stages: explore, propose, spec, design, tasks, test. Tests before code.',
    'card-a3-title': 'CSS-First, AI-Assisted',
    'card-a3-desc': 'CSS-first. AI-accelerated audits. Human-led architecture.',
    'card-a4-title': '4 Languages, Global Reach',
    'card-a4-desc': 'UA, RU, ES, EN. The message adapts to the culture, not just the words.',
    'section-contact-label': 'Let\'s Talk',
    'section-contact-title': 'Got a project? <span class="text-accent">Let\'s build it</span>.',
    'section-contact-desc': 'Accessibility audit, AI workflow, or digital strategy — available for consulting across LATAM.',
    'footer-text': '\u00A9 2026 \u00B7 Illya Grytsyk \u00B7 Mar del Plata, Argentina',
    'skip-link': 'Skip to main content',
    'nav-label': 'Main navigation',
    'lang-aria': 'Select language',
    'lang-en': 'English',
    'lang-es': 'Spanish',
    'lang-ua': 'Ukrainian'
  },
  es: {
    'nav-work': 'Trabajos',
    'nav-approach': 'Enfoque',
    'nav-contact': 'Contacto',
    'tag-1': 'Ing. en IA',
    'tag-2': 'Accesibilidad',
    'tag-3': 'Growth Partner',
    'hero-title': 'Accesibilidad digital<br>no es solo cumplimiento.<span class="highlight">Es estrategia.</span>',
    'hero-sub': 'Digital estatal que funciona. Auditor\u00EDas WCAG con IA. UX que la gente no odia.',
    'btn-primary': 'Conversemos',
    'btn-secondary': 'Ver mi trabajo',
    'section-work-label': '\u00C1reas de Enfoque',
    'section-work-title': 'Donde <span class="text-accent">opero</span>.',
    'card-1-title': 'Gobierno y Sector P\u00FAblico',
    'card-1-desc': 'Auditor\u00EDas WCAG a remediaci\u00F3n completa. Argentina primero, LATAM despu\u00E9s.',
    'card-2-title': 'Accesibilidad Digital',
    'card-2-desc': 'Para usuarios neurodivergentes. Acelerado con IA. Cumplimiento WCAG.',
    'card-3-title': 'Automatizaci\u00F3n con IA',
    'card-3-desc': 'Agentes de IA para gobierno. De CRM a reportes de accesibilidad.',
    'card-4-title': 'Growth Partner',
    'card-4-desc': 'Presencia digital que convierte. Estrategia + ejecuci\u00F3n.',
    'section-approach-label': 'C\u00F3mo Construyo',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, centrado en humanos.',
    'card-a1-title': 'Sistemas de Dise\u00F1o OKLCH',
    'card-a1-desc': 'Arquitectura de color OKLCH. Perceptualmente uniforme. Accesible por defecto.',
    'card-a2-title': 'Desarrollo Spec-First',
    'card-a2-desc': '6 etapas: explorar, proponer, especificar, dise\u00F1ar, tareas, testear. Tests antes del c\u00F3digo.',
    'card-a3-title': 'CSS-First, Asistido por IA',
    'card-a3-desc': 'CSS-first. Auditor\u00EDas aceleradas con IA. Arquitectura liderada por humanos.',
    'card-a4-title': '4 Idiomas, Alcance Global',
    'card-a4-desc': 'UA, RU, ES, EN. El mensaje se adapta a la cultura, no solo las palabras.',
    'section-contact-label': 'Hablemos',
    'section-contact-title': '\u00BFUn proyecto? <span class="text-accent">Construy\u00E1moslo</span>.',
    'section-contact-desc': 'Auditor\u00EDa de accesibilidad, workflow con IA, o estrategia digital — disponible para consultor\u00EDa en LATAM.',
    'footer-text': '\u00A9 2026 \u00B7 Illya Grytsyk \u00B7 Mar del Plata, Argentina',
    'skip-link': 'Saltar al contenido principal',
    'nav-label': 'Navegaci\u00F3n principal',
    'lang-aria': 'Seleccionar idioma',
    'lang-en': 'Ingl\u00E9s',
    'lang-es': 'Espa\u00F1ol',
    'lang-ua': 'Ucraniano'
  },
  ua: {
    'nav-work': 'Роботи',
    'nav-approach': 'Підхід',
    'nav-contact': 'Контакти',
    'tag-1': 'Інженер ШІ',
    'tag-2': 'Доступність',
    'tag-3': 'Партнер зростання',
    'hero-title': 'Цифрова доступність<br>це не просто відповідність.<span class="highlight">Це стратегія.</span>',
    'hero-sub': 'Державні цифрові сервіси, які працюють. WCAG аудити з ШІ. UX без дратування.',
    'btn-primary': 'Почати розмову',
    'btn-secondary': 'Подивитись роботи',
    'section-work-label': 'Напрямки',
    'section-work-title': 'Де я <span class="text-accent">працюю</span>.',
    'card-1-title': 'Державний сектор',
    'card-1-desc': 'WCAG аудити до повної ремедіації. Аргентина — LATAM.',
    'card-2-title': 'Цифрова доступність',
    'card-2-desc': 'Для нейровідмінних користувачів. Прискорено ШІ. WCAG сумісність.',
    'card-3-title': 'Автоматизація з ШІ',
    'card-3-desc': 'Агенти ШІ для уряду. Від CRM до звітів доступності.',
    'card-4-title': 'Партнер зростання',
    'card-4-desc': 'Цифрова присутність, яка конвертує. Стратегія + виконання.',
    'section-approach-label': 'Як я будую',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, орієнтовано на людину.',
    'card-a1-title': 'OKLCH системи дизайну',
    'card-a1-desc': 'Архітектура кольору OKLCH. Перцептивно рівномірна. Доступна за замовчуванням.',
    'card-a2-title': 'Spec-First розробка',
    'card-a2-desc': '6 етапів: дослідити, запропонувати, специфікувати, спроектувати, задачі, тести. Тести перед кодом.',
    'card-a3-title': 'CSS-First, з допомогою ШІ',
    'card-a3-desc': 'CSS-first. Аудити прискорені ШІ. Архітектура під керівництвом людини.',
    'card-a4-title': '4 мови, глобальне охоплення',
    'card-a4-desc': 'UA, RU, ES, EN. Повідомлення адаптується до культури, а не лише слова.',
    'section-contact-label': 'Поговорімо',
    'section-contact-title': 'Маєте проект? <span class="text-accent">Давайте побудуємо</span>.',
    'section-contact-desc': 'Аудит доступності, робочий процес з ШІ, цифрова стратегія — доступний для консультацій у LATAM.',
    'footer-text': '\u00A9 2026 \u00B7 Ілля Грицик \u00B7 Мар-дель-Плата, Аргентина',
    'skip-link': 'Перейти до основного вмісту',
    'nav-label': 'Головна навігація',
    'lang-aria': 'Вибрати мову',
    'lang-en': 'Англійська',
    'lang-es': 'Іспанська',
    'lang-ua': 'Українська'
  },
  ru: {
    'nav-work': 'Проекты',
    'nav-approach': 'Подход',
    'nav-contact': 'Контакты',
    'tag-1': 'Инженер ИИ',
    'tag-2': 'Доступность',
    'tag-3': 'Партнер по росту',
    'hero-title': 'Цифровая доступность<br>это не просто соответствие.<br><span class="highlight">Это стратегия.</span>',
    'hero-sub': 'Государственные цифровые сервисы, которые работают. WCAG аудиты с ИИ. UX без раздражения.',
    'btn-primary': 'Начать разговор',
    'btn-secondary': 'Посмотреть работы',
    'section-work-label': 'Направления',
    'section-work-title': 'Где я <span class="text-accent">работаю</span>.',
    'card-1-title': 'Госуправление и администрирование',
    'card-1-desc': 'WCAG аудиты до полной ремедиации. Аргентина первая, LATAM дальше.',
    'card-2-title': 'Цифровая доступность',
    'card-2-desc': 'Для нейроотличных пользователей. Ускорено ИИ. WCAG совместимость.',
    'card-3-title': 'Автоматизация с ИИ',
    'card-3-desc': 'Агенты ИИ для государства. От CRM до отчетов доступности.',
    'card-4-title': 'Партнер по росту',
    'card-4-desc': 'Цифровое присутствие, которое конвертирует. Стратегия + исполнение.',
    'section-approach-label': 'Как я строю',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, ориентировано на человека.',
    'card-a1-title': 'Дизайн-системы OKLCH',
    'card-a1-desc': 'Архитектура цвета OKLCH. Перцептивно равномерная. Доступная по умолчанию.',
    'card-a2-title': 'Разработка Spec-First',
    'card-a2-desc': '6 этапов: исследовать, предложить, специфицировать, спроектировать, задачи, тесты. Тесты перед кодом.',
    'card-a3-title': 'CSS-First, ИИ-ассистировано',
    'card-a3-desc': 'CSS-first. Аудиты ускорены ИИ. Архитектура под руководством человека.',
    'card-a4-title': '4 языка, глобальный охват',
    'card-a4-desc': 'UA, RU, ES, EN. Сообщение адаптируется к культуре, а не только слова.',
    'section-contact-label': 'Давайте поговорим',
    'section-contact-title': 'Есть проект? <span class="text-accent">Давайте создадим</span>.',
    'section-contact-desc': 'Аудит доступности, ИИ-воркфлоу или цифровая стратегия — доступен для консалтинга по всей LATAM.',
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
  document.getElementById('nav-work').textContent = t['nav-work'];
  document.getElementById('nav-approach').textContent = t['nav-approach'];
  document.getElementById('nav-contact').textContent = t['nav-contact'];
  document.getElementById('tag-1').textContent = t['tag-1'];
  document.getElementById('tag-2').textContent = t['tag-2'];
  document.getElementById('tag-3').textContent = t['tag-3'];
  document.getElementById('hero-title').innerHTML = t['hero-title'];
  document.getElementById('hero-sub').textContent = t['hero-sub'];
  document.getElementById('btn-primary').textContent = t['btn-primary'];
  document.getElementById('btn-secondary').textContent = t['btn-secondary'];
  document.getElementById('section-work-label').textContent = t['section-work-label'];
  document.getElementById('section-work-title').innerHTML = t['section-work-title'];
  document.getElementById('card-1-title').textContent = t['card-1-title'];
  document.getElementById('card-1-desc').textContent = t['card-1-desc'];
  document.getElementById('card-2-title').textContent = t['card-2-title'];
  document.getElementById('card-2-desc').textContent = t['card-2-desc'];
  document.getElementById('card-3-title').textContent = t['card-3-title'];
  document.getElementById('card-3-desc').textContent = t['card-3-desc'];
  document.getElementById('card-4-title').textContent = t['card-4-title'];
  document.getElementById('card-4-desc').textContent = t['card-4-desc'];
  document.getElementById('section-approach-label').textContent = t['section-approach-label'];
  document.getElementById('section-approach-title').innerHTML = t['section-approach-title'];
  document.getElementById('card-a1-title').textContent = t['card-a1-title'];
  document.getElementById('card-a1-desc').textContent = t['card-a1-desc'];
  document.getElementById('card-a2-title').textContent = t['card-a2-title'];
  document.getElementById('card-a2-desc').textContent = t['card-a2-desc'];
  document.getElementById('card-a3-title').textContent = t['card-a3-title'];
  document.getElementById('card-a3-desc').textContent = t['card-a3-desc'];
  document.getElementById('card-a4-title').textContent = t['card-a4-title'];
  document.getElementById('card-a4-desc').textContent = t['card-a4-desc'];
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
