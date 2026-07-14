// ===== i18n =====
var cyclingInterval = null;
var cyclingIndex = 0;

const i18n = {
  en: {
    'nav-approach': 'Approach',
    'nav-contact': 'Contact',
    'tag-1': 'AI · GovTech',
    'tag-2': 'WCAG Accessibility',
    'tag-3': 'Digital Inclusion',
    'hero-title': 'Digital accessibility<br>isn\'t just compliance.<span class="highlight" id="hero-highlight">It\'s strategy.</span>',
    'hero-sub': 'Clear requirements. <strong>No one left behind.</strong>',
    'hero-title-highlight': [
      'It\'s strategy.',
      'It\'s an investment.',
      'It\'s trust.',
      'It opens markets.'
    ],
    'btn-primary': 'Start a conversation',
    'section-work-label': 'Focus Areas',
    'section-work-title': 'Where we <span class="text-accent">deliver</span>.',
    'card-1-title': 'Government & Public Admin',
    'card-1-desc': 'WCAG-compliant government services citizens can actually use. Municipal portals to national platforms.',
    'card-2-title': 'Digital Accessibility',
    'card-2-desc': 'Full-spectrum accessibility: audits, remediation, compliance. WCAG 2.2 AA and beyond.',
    'card-3-title': 'AI Automation',
    'card-3-desc': 'Smart automation for repetitive processes. AI that augments human work, not replaces it.',
    'card-4-title': 'Schools & Education',
    'card-4-desc': 'Accessible platforms for public and private schools. EdTech with inclusion built-in.',
    'section-approach-label': 'How We Build',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, UX-centered.',
    'card-a1-title': '<span class="text-white">It\'s strategic. Digital accessibility</span><br><span class="text-accent">isn\'t just compliance.</span>',
    'card-a2-title': 'First We Understand, Then We Build',
    'card-a2-desc': 'Clear requirements first. We define goals, design, test, and only then write code. Predictable process, predictable results.',
    'card-a3-title': 'The Right Tools for Your Project',
    'card-a3-desc': 'We don\'t use the newest tech just because. We choose what solves your real problem — without inflating costs.',
    'card-a4-title': 'Your Message Reaches Further',
    'card-a4-desc': 'Your message, adapted for every audience. We craft content that connects naturally in each language and culture. More reach, without losing your voice.',
    'section-contact-label': 'Let\'s Talk',
    'section-contact-title': 'Got a project? <span class="text-accent">Let\'s build it</span>.',
    'section-contact-desc': 'One conversation can change your approach to digital. Let\'s talk about your project.',
    'btn-contact-email': 'Email me',
    'whatsapp-msg': 'Hey Illya! I saw your site and I\'d love to talk about a project.',
    'whatsapp-label': 'Contact via WhatsApp (opens in new tab)',
    'footer-text': '\u00A9 2026 \u00B7 Illya Grytsyk \u00B7 Mar del Plata, Argentina',
    'skip-link': 'Skip to main content',
    'nav-label': 'Main navigation',
    'lang-announce': 'Language changed to English',
    'hamburger-label': 'Toggle navigation',
    'mobile-menu-label': 'Navigation menu'
  },
  es: {
    'nav-approach': 'Enfoque',
    'nav-contact': 'Contacto',
    'tag-1': 'IA · GovTech',
    'tag-2': 'Accesibilidad WCAG',
    'tag-3': 'Inclusión Digital',
    'hero-title': 'Accesibilidad digital<br>no es solo cumplimiento.<span class="highlight" id="hero-highlight">Es estrategia.</span>',
    'hero-sub': 'Requisitos claros. <strong>Nadie queda afuera.</strong>',
    'hero-title-highlight': [
      'Es estrategia.',
      'Es inversión.',
      'Es confianza.',
      'Abre mercados.'
    ],
    'btn-primary': 'Conversemos',
    'section-work-label': '\u00C1reas de Enfoque',
    'section-work-title': 'Donde <span class="text-accent">entregamos</span>.',
    'card-1-title': 'Gobierno y Sector P\u00FAblico',
    'card-1-desc': 'Servicios de gobierno accesibles que los ciudadanos realmente pueden usar. De portales municipales a plataformas nacionales.',
    'card-2-title': 'Accesibilidad Digital',
    'card-2-desc': 'Accesibilidad completa: auditorías, remediación, cumplimiento. WCAG 2.2 AA y más allá.',
    'card-3-title': 'Automatizaci\u00F3n con IA',
    'card-3-desc': 'Automatización inteligente de procesos repetitivos. IA que potencia el trabajo humano, no lo reemplaza.',
    'card-4-title': 'Escuelas y Educación',
    'card-4-desc': 'Plataformas accesibles para escuelas públicas y privadas. EdTech con inclusión desde el vamos.',
    'section-approach-label': 'Cómo Construimos',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, centrado en UX.',
    'card-a1-title': '<span class="text-white">Es estratégico. Accesibilidad digital</span><br><span class="text-accent">no es solo cumplimiento.</span>',
    'card-a2-title': 'Primero entendemos, después construimos',
    'card-a2-desc': 'Requisitos claros primero. Definimos objetivos, diseñamos, probamos, y recién ahí escribimos código. Proceso predecible, resultados predecibles.',
    'card-a3-title': 'Las herramientas justas para tu proyecto',
    'card-a3-desc': 'No usamos lo más nuevo porque sí. Elegimos lo que resuelve tu problema real, sin inflar costos ni complejidad.',
    'card-a4-title': 'Tu mensaje llega más lejos',
    'card-a4-desc': 'Tu mensaje, adaptado para cada audiencia. Creamos contenido que conecta naturalmente en cada idioma y cultura. Más alcance, sin perder tu voz.',
    'section-contact-label': 'Hablemos',
    'section-contact-title': '\u00BFUn proyecto? <span class="text-accent">Construy\u00E1moslo</span>.',
    'section-contact-desc': 'Una conversaci\u00F3n puede cambiar tu enfoque digital. Hablemos de tu proyecto.',
    'btn-contact-email': 'Escríbeme',
    'whatsapp-msg': '¡Hola Illya! Vi tu sitio y me gustaría hablar sobre un proyecto.',
    'whatsapp-label': 'Contactar por WhatsApp (se abre en nueva pestaña)',
    'footer-text': '\u00A9 2026 \u00B7 Illya Grytsyk \u00B7 Mar del Plata, Argentina',
    'skip-link': 'Saltar al contenido principal',
    'nav-label': 'Navegaci\u00F3n principal',
    'lang-announce': 'Idioma cambiado a Espa\u00F1ol',
    'hamburger-label': 'Abrir men\u00FA de navegaci\u00F3n',
    'mobile-menu-label': 'Men\u00FA de navegaci\u00F3n'
  },
  ua: {
    'nav-approach': 'Підхід',
    'nav-contact': 'Контакти',
    'tag-1': 'ШІ · GovTech',
    'tag-2': 'WCAG Доступність',
    'tag-3': 'Цифрова Інклюзія',
    'hero-title': 'Цифрова доступність<br>це не просто відповідність.<span class="highlight" id="hero-highlight">Це стратегія.</span>',
    'hero-sub': 'Чіткі вимоги. <strong>Ніхто не залишається осторонь.</strong>',
    'hero-title-highlight': [
      'Це стратегія.',
      'Це інвестиція.',
      'Це довіра.',
      'Відкриває ринки.'
    ],
    'btn-primary': 'Почати розмову',
    'section-work-label': 'Напрямки',
    'section-work-title': 'Де <span class="text-accent">доставляємо</span>.',
    'card-1-title': 'Державний сектор',
    'card-1-desc': 'Доступні державні сервіси, якими громадяни дійсно можуть користуватися. Від муніципальних порталів до національних платформ.',
    'card-2-title': 'Цифрова доступність',
    'card-2-desc': 'Повний спектр доступності: аудити, виправлення, відповідність. WCAG 2.2 AA та далі.',
    'card-3-title': 'Автоматизація з ШІ',
    'card-3-desc': 'Розумна автоматизація повторюваних процесів. ШІ, який посилює людську працю, а не замінює її.',
    'card-4-title': 'Школи та Освіта',
    'card-4-desc': 'Доступні платформи для державних і приватних шкіл. EdTech з інклюзією з самого початку.',
    'section-approach-label': 'Як ми будуємо',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, орієнтовано на UX.',
    'card-a1-title': '<span class="text-white">Це стратегічно. Цифрова доступність</span><br><span class="text-accent">— це не просто відповідність.</span>',
    'card-a2-title': 'Спочатку розуміємо, потім будуємо',
    'card-a2-desc': 'Чіткі вимоги спочатку. Визначаємо цілі, проектуємо, тестуємо, і тільки тоді пишемо код. Передбачуваний процес, передбачувані результати.',
    'card-a3-title': 'Правильні інструменти для вашого проекту',
    'card-a3-desc': 'Ми не використовуємо найновіші технології просто тому. Ми обираємо те, що вирішує вашу реальну проблему — без завищення витрат.',
    'card-a4-title': 'Ваше повідомлення сягає далі',
    'card-a4-desc': 'Ваше повідомлення, адаптоване для кожної аудиторії. Ми створюємо контент, який природньо резонує в кожній мові та культурі. Більше охоплення, без втрати вашого голосу.',
    'section-contact-label': 'Поговорімо',
    'section-contact-title': 'Маєте проект? <span class="text-accent">Давайте побудуємо</span>.',
    'section-contact-desc': 'Одна розмова може змінити ваш підхід до цифрового. Розкажіть про свій проект.',
    'btn-contact-email': 'Напишіть мені',
    'whatsapp-msg': 'Привіт, Ілля! Я бачив ваш сайт і хотів би поговорити про проєкт.',
    'whatsapp-label': 'Зв\'язатися через WhatsApp (відкривається в новій вкладці)',
    'footer-text': '\u00A9 2026 \u00B7 Ілля Грицик \u00B7 Мар-дель-Плата, Аргентина',
    'skip-link': 'Перейти до основного вмісту',
    'nav-label': 'Головна навігація',
    'lang-announce': 'Мову змінено на Українську',
    'hamburger-label': 'Відкрити меню навігації',
    'mobile-menu-label': 'Меню навігації'
  },
  ru: {
    'nav-approach': 'Подход',
    'nav-contact': 'Контакты',
    'tag-1': 'ИИ · GovTech',
    'tag-2': 'WCAG Доступность',
    'tag-3': 'Цифровая Инклюзия',
    'hero-title': 'Цифровая доступность<br>это не просто соответствие.<br><span class="highlight" id="hero-highlight">Это стратегия.</span>',
    'hero-sub': 'Чёткие требования. <strong>Никто не остается в стороне.</strong>',
    'hero-title-highlight': [
      'Это стратегия.',
      'Это инвестиция.',
      'Это доверие.',
      'Открывает рынки.'
    ],
    'btn-primary': 'Начать разговор',
    'section-work-label': 'Направления',
    'section-work-title': 'Где <span class="text-accent">доставляем</span>.',
    'card-1-title': 'Госуправление и администрирование',
    'card-1-desc': 'Доступные государственные сервисы, которыми граждане действительно могут пользоваться. От муниципальных порталов до национальных платформ.',
    'card-2-title': 'Цифровая доступность',
    'card-2-desc': 'Полный спектр доступности: аудиты, исправления, соответствие. WCAG 2.2 AA и далее.',
    'card-3-title': 'Автоматизация с ИИ',
    'card-3-desc': 'Умная автоматизация повторяющихся процессов. ИИ, который усиливает человеческий труд, а не заменяет его.',
    'card-4-title': 'Школы и Образование',
    'card-4-desc': 'Доступные платформы для государственных и частных школ. EdTech с инклюзией с самого начала.',
    'section-approach-label': 'Как мы строим',
    'section-approach-title': '<span class="text-accent">Spec-first</span>, ориентировано на UX.',
    'card-a1-title': '<span class="text-white">Это стратегически. Цифровая доступность</span><br><span class="text-accent">— это не просто соответствие.</span>',
    'card-a2-title': 'Сначала понимаем, потом строим',
    'card-a2-desc': 'Четкие требования сначала. Определяем цели, проектируем, тестируем, и только потом пишем код. Предсказуемый процесс, предсказуемые результаты.',
    'card-a3-title': 'Правильные инструменты для вашего проекта',
    'card-a3-desc': 'Мы не используем новейшие технологии просто потому что. Мы выбираем то, что решает вашу реальную проблему — без завышения затрат.',
    'card-a4-title': 'Ваше сообщение достигает большего',
    'card-a4-desc': 'Ваше сообщение, адаптированное для каждой аудитории. Мы создаем контент, который естественно резонирует на каждом языке и в каждой культуре. Больше охвата, без потери вашего голоса.',
    'section-contact-label': 'Давайте поговорим',
    'section-contact-title': 'Есть проект? <span class="text-accent">Давайте создадим</span>.',
    'section-contact-desc': 'Один разговор может изменить ваш подход к цифровому. Расскажите о своем проекте.',
    'btn-contact-email': 'Напишите мне',
    'whatsapp-msg': 'Привет, Илья! Я видел ваш сайт и хотел бы поговорить о проекте.',
    'whatsapp-label': 'Связаться через WhatsApp (открывается в новой вкладке)',
    'footer-text': '\u00A9 2026 \u00B7 Илья Грицик \u00B7 Мар-дель-Плата, Аргентина',
    'skip-link': 'Перейти к основному содержанию',
    'nav-label': 'Основная навигация',
    'lang-announce': 'Язык изменён на Русский',
    'hamburger-label': 'Открыть меню навигации',
    'mobile-menu-label': 'Меню навигации'
  }
};

var urlLang = new URLSearchParams(window.location.search).get('lang');
var savedLang = localStorage.getItem('lang');
var currentLang = urlLang || savedLang || 'es';
if (urlLang && urlLang !== savedLang) {
  localStorage.setItem('lang', urlLang);
}

function setDesc(id, text) {
  var el = document.getElementById(id);
  if (el && text) el.textContent = text;
}

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelector('.skip-link').textContent = t['skip-link'];
  document.querySelector('.nav').setAttribute('aria-label', t['nav-label']);
  const select = document.getElementById('langSelect');
  if (select) select.value = lang;
  document.getElementById('nav-approach').textContent = t['nav-approach'];
  document.getElementById('nav-contact').textContent = t['nav-contact'];
  // Mobile menu links
  var mobileApproach = document.getElementById('nav-approach-mobile');
  var mobileContact = document.getElementById('nav-contact-mobile');
  if (mobileApproach) mobileApproach.textContent = t['nav-approach'];
  if (mobileContact) mobileContact.textContent = t['nav-contact'];
  // Sync mobile lang-select
  var mobileLangSelect = document.getElementById('langSelectMobile');
  if (mobileLangSelect) mobileLangSelect.value = lang;
  document.getElementById('tag-1').textContent = t['tag-1'];
  document.getElementById('tag-2').textContent = t['tag-2'];
  document.getElementById('tag-3').textContent = t['tag-3'];
  document.getElementById('hero-title').innerHTML = t['hero-title'];

  // Static hero-sub text
  var subEl = document.getElementById('hero-sub');
  if (subEl) subEl.innerHTML = t['hero-sub'];

  // Cycling highlight in hero title
  var hlEl = document.getElementById('hero-highlight');
  if (hlEl) {
    hlEl.setAttribute('aria-live', 'polite');
    hlEl.setAttribute('aria-atomic', 'true');
  }
  if (hlEl && t['hero-title-highlight']) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      hlEl.textContent = t['hero-title-highlight'][0];
      return;
    }
    if (cyclingInterval) { clearInterval(cyclingInterval); cyclingInterval = null; }
    var phrases = t['hero-title-highlight'];
    cyclingIndex = 0;
    hlEl.textContent = phrases[0];
    cyclingInterval = setInterval(function() {
      cyclingIndex = (cyclingIndex + 1) % phrases.length;
      hlEl.classList.add('is-hidden');
      setTimeout(function() {
        hlEl.textContent = phrases[cyclingIndex];
        hlEl.classList.remove('is-hidden');
      }, 200);
    }, 2800);
  }
  document.getElementById('btn-primary').textContent = t['btn-primary'];
  document.getElementById('section-work-label').textContent = t['section-work-label'];
  document.getElementById('section-work-title').innerHTML = t['section-work-title'];
  document.getElementById('card-1-title').textContent = t['card-1-title'];
  setDesc('card-1-desc', t['card-1-desc']);
  document.getElementById('card-2-title').textContent = t['card-2-title'];
  setDesc('card-2-desc', t['card-2-desc']);
  document.getElementById('card-3-title').textContent = t['card-3-title'];
  setDesc('card-3-desc', t['card-3-desc']);
  document.getElementById('card-4-title').textContent = t['card-4-title'];
  setDesc('card-4-desc', t['card-4-desc']);
  document.getElementById('section-approach-label').textContent = t['section-approach-label'];
  document.getElementById('section-approach-title').innerHTML = t['section-approach-title'];
  document.getElementById('card-a1-title').innerHTML = t['card-a1-title'];
  document.getElementById('card-a2-title').textContent = t['card-a2-title'];
  setDesc('card-a2-desc', t['card-a2-desc']);
  document.getElementById('card-a3-title').textContent = t['card-a3-title'];
  setDesc('card-a3-desc', t['card-a3-desc']);
  document.getElementById('card-a4-title').textContent = t['card-a4-title'];
  setDesc('card-a4-desc', t['card-a4-desc']);
  document.getElementById('section-contact-label').textContent = t['section-contact-label'];
  document.getElementById('section-contact-title').innerHTML = t['section-contact-title'];
  document.getElementById('section-contact-desc').textContent = t['section-contact-desc'];
  document.getElementById('btn-contact-email').textContent = t['btn-contact-email'];
  var waBtn = document.getElementById('btn-contact-whatsapp');
  if (waBtn) {
    waBtn.setAttribute('aria-label', t['whatsapp-label']);
    waBtn.href = 'https://wa.me/5491124063009?text=' + encodeURIComponent(t['whatsapp-msg']);
  }
  var waFloat = document.getElementById('whatsappFloat');
  if (waFloat) {
    waFloat.setAttribute('aria-label', t['whatsapp-label']);
    waFloat.href = 'https://wa.me/5491124063009?text=' + encodeURIComponent(t['whatsapp-msg']);
  }
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  if (hamburgerBtn) hamburgerBtn.setAttribute('aria-label', t['hamburger-label']);
  var mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.setAttribute('aria-label', t['mobile-menu-label']);
  document.getElementById('footer-text').textContent = t['footer-text'];
  localStorage.setItem('lang', lang);
  currentLang = lang;

  // Announce language change for screen readers
  const announcer = document.getElementById('i18n-announce');
  if (announcer) {
    announcer.textContent = t['lang-announce'] || '';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const select = document.getElementById('langSelect');
  if (select) {
    select.addEventListener('change', function() {
      applyLang(this.value);
    });
  }
  applyLang(currentLang);

  // Pause cycling when tab hidden, resume when visible
  document.addEventListener('visibilitychange', function() {
    if (document.hidden && cyclingInterval) {
      clearInterval(cyclingInterval);
      cyclingInterval = null;
    } else if (!document.hidden && !cyclingInterval) {
      var t = i18n[currentLang];
      if (t && t['hero-title-highlight']) {
        var el = document.getElementById('hero-highlight');
        var phrases = t['hero-title-highlight'];
        if (el) {
          cyclingInterval = setInterval(function() {
            cyclingIndex = (cyclingIndex + 1) % phrases.length;
            el.classList.add('is-hidden');
            setTimeout(function() {
              el.textContent = phrases[cyclingIndex];
              el.classList.remove('is-hidden');
            }, 200);
          }, 2800);
        }
      }
    }
  });
});
