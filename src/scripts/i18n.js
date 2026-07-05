// ===== i18n =====
const i18n = {
  en: {
    'nav-work': 'Work',
    'nav-approach': 'Approach',
    'nav-contact': 'Contact',
    'lang-label': 'ES',
    'tag-1': 'AI Engineer',
    'tag-2': 'Accessibility',
    'tag-3': 'Growth Partner',
    'hero-title': 'Digital accessibility<br>isn\'t just compliance.<span class="highlight">It\'s strategy.</span>',
    'hero-sub': 'Government digital services that actually work. AI-powered audits, WCAG compliance, and UX people don\'t hate.',
    'btn-primary': 'Start a conversation',
    'btn-secondary': 'See my work',
    'section-work-label': 'Focus Areas',
    'section-work-title': 'Where I <span class="text-accent">operate</span>.',
    'card-1-title': 'Government & Public Admin',
    'card-1-desc': 'WCAG audits, UX diagnostics, and full remediation. Argentina first, LATAM next.',
    'card-2-title': 'Digital Accessibility',
    'card-2-desc': 'Real accessibility for neurodivergent users, visual impairments, and cognitive disabilities. AI-accelerated.',
    'card-3-title': 'AI Automation',
    'card-3-desc': 'Process automation with n8n, Python, and AI agents. CRM to accessibility reporting.',
    'card-4-title': 'Growth Partner',
    'card-4-desc': 'Communication strategies for digital presence that converts.',
    'section-approach-label': 'How I Build',
    'section-approach-title': '<span class="text-accent">Spec-driven</span>, human-centered.',
    'card-a1-title': 'OKLCH Design Systems',
    'card-a1-desc': '3-layer color architecture. Perceptually uniform, accessible by default.',
    'card-a2-title': 'Spec-First Development',
    'card-a2-desc': '6 stages: explore, propose, spec, design, tasks, test. Tests before code.',
    'card-a3-title': 'CSS-First, AI-Assisted',
    'card-a3-desc': 'CSS-first. AI accelerates audits, alt text, ARIA fixes — architecture stays human-led.',
    'card-a4-title': '4 Languages, Global Reach',
    'card-a4-desc': 'UA, RU, ES, EN. I adapt the message to the culture, not just translate it.',
    'section-contact-label': 'Let\'s Talk',
    'section-contact-title': 'Got a project? <span class="text-accent">Let\'s build it</span>.',
    'section-contact-desc': 'Accessibility audit, AI workflow, or digital strategy — available for consulting across LATAM.',
    'footer-text': '© 2026 · Illya Grytsyk · Mar del Plata, Argentina',
    'skip-link': 'Skip to main content',
    'nav-label': 'Main navigation',
    'lang-aria': 'Switch language'
  },
  es: {
    'nav-work': 'Trabajos',
    'nav-approach': 'Enfoque',
    'nav-contact': 'Contacto',
    'lang-label': 'EN',
    'tag-1': 'Ing. en IA',
    'tag-2': 'Accesibilidad',
    'tag-3': 'Growth Partner',
    'hero-title': 'Accesibilidad digital<br>no es solo cumplimiento.<span class="highlight">Es estrategia.</span>',
    'hero-sub': 'Servicios digitales gubernamentales que funcionan. Auditorías con IA, cumplimiento WCAG, y UX que la gente no odia.',
    'btn-primary': 'Conversemos',
    'btn-secondary': 'Ver mi trabajo',
    'section-work-label': 'Áreas de Enfoque',
    'section-work-title': 'Donde <span class="text-accent">opero</span>.',
    'card-1-title': 'Gobierno y Sector Público',
    'card-1-desc': 'Auditorías WCAG, diagnóstico UX, y remediación completa. Argentina primero, LATAM después.',
    'card-2-title': 'Accesibilidad Digital',
    'card-2-desc': 'Accesibilidad real para usuarios neurodivergentes, discapacidades visuales y cognitivas. Acelerado con IA.',
    'card-3-title': 'Automatización con IA',
    'card-3-desc': 'Automatización de procesos con n8n, Python y agentes de IA. De CRM a reportes de accesibilidad.',
    'card-4-title': 'Growth Partner',
    'card-4-desc': 'Estrategias de comunicación para presencia digital que convierte.',
    'section-approach-label': 'Cómo Construyo',
    'section-approach-title': '<span class="text-accent">Spec-driven</span>, centrado en humanos.',
    'card-a1-title': 'Sistemas de Diseño OKLCH',
    'card-a1-desc': 'Arquitectura de color 3-capas. Perceptualmente uniforme, accesible por defecto.',
    'card-a2-title': 'Desarrollo Spec-First',
    'card-a2-desc': '6 etapas: explorar, proponer, especificar, diseñar, tareas, testear. Tests antes del código.',
    'card-a3-title': 'CSS-First, Asistido por IA',
    'card-a3-desc': 'CSS-first. IA acelera auditorías, texto alternativo, ARIA — la arquitectura la dirige un humano.',
    'card-a4-title': '4 Idiomas, Alcance Global',
    'card-a4-desc': 'UA, RU, ES, EN. Adapto el mensaje a la cultura, no solo lo traduzco.',
    'section-contact-label': 'Hablemos',
    'section-contact-title': '¿Un proyecto? <span class="text-accent">Construyámoslo</span>.',
    'section-contact-desc': 'Auditoría de accesibilidad, workflow con IA, o estrategia digital — disponible para consultoría en LATAM.',
    'footer-text': '© 2026 · Illya Grytsyk · Mar del Plata, Argentina',
    'skip-link': 'Saltar al contenido principal',
    'nav-label': 'Navegación principal',
    'lang-aria': 'Cambiar idioma'
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelector('.skip-link').textContent = t['skip-link'];
  document.querySelector('.nav').setAttribute('aria-label', t['nav-label']);
  document.getElementById('langToggle').textContent = t['lang-label'];
  document.getElementById('langToggle').setAttribute('aria-label', t['lang-aria']);
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

document.getElementById('langToggle').addEventListener('click', function() {
  applyLang(currentLang === 'en' ? 'es' : 'en');
});

applyLang(currentLang);
