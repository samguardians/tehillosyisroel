// =====================================================
// מכון תהלות ישראל — Main Application
// =====================================================

// ===== LANGUAGE =====
const Lang = {
  current: localStorage.getItem('ti_lang') || 'he',
  strings: {
    he: {
      nav_home: 'דף הבית', nav_lessons: 'שיעורים', nav_books: 'ספרים',
      nav_updates: 'עדכונים', nav_contact: 'צור קשר', nav_donate: 'תרומות',
      nav_admin: 'כניסה לאדמין', subscribe_btn: 'הרשמה',
      play: 'השמע', download: 'הורדה', read: 'קריאה',
      search_placeholder: 'חיפוש שיעורים, ספרים, נושאים...',
      all_categories: 'כל הקטגוריות', all_speakers: 'כל המרצים',
      sort_newest: 'חדש לישן', sort_oldest: 'ישן לחדש',
      sort_popular: 'הכי פופולרי', sort_alpha: 'א-ב',
      results: 'תוצאות', no_results: 'לא נמצאו תוצאות',
      loading: 'טוען...', featured: 'מומלץ', new: 'חדש',
      min: 'דקות', downloads: 'הורדות',
      subscribe_success: 'נרשמת בהצלחה! תודה.',
      contact_success: 'הודעתך נשלחה בהצלחה!',
      donate_success: 'תודה על תרומתך הנדיבה!',
      required: 'שדה חובה', invalid_email: 'כתובת אימייל לא תקינה',
      player_loading: 'טוען שיעור...',
    },
    en: {
      nav_home: 'Home', nav_lessons: 'Lessons', nav_books: 'Books',
      nav_updates: 'Updates', nav_contact: 'Contact', nav_donate: 'Donate',
      nav_admin: 'Admin Login', subscribe_btn: 'Subscribe',
      play: 'Play', download: 'Download', read: 'Read',
      search_placeholder: 'Search lessons, books, topics...',
      all_categories: 'All Categories', all_speakers: 'All Speakers',
      sort_newest: 'Newest First', sort_oldest: 'Oldest First',
      sort_popular: 'Most Popular', sort_alpha: 'A-Z',
      results: 'Results', no_results: 'No results found',
      loading: 'Loading...', featured: 'Featured', new: 'New',
      min: 'min', downloads: 'Downloads',
      subscribe_success: 'Subscribed successfully! Thank you.',
      contact_success: 'Your message was sent successfully!',
      donate_success: 'Thank you for your generous donation!',
      required: 'Required field', invalid_email: 'Invalid email address',
      player_loading: 'Loading lesson...',
    }
  },
  t(key) { return this.strings[this.current][key] || key; },
  set(lang) {
    this.current = lang;
    localStorage.setItem('ti_lang', lang);
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-en', lang === 'en');
    document.querySelectorAll('[data-he]').forEach(el => {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = el.dataset[lang] || '';
      } else {
        el.innerHTML = el.dataset[lang] || '';
      }
    });
    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.dataset.langKey;
      el.innerHTML = this.t(key);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    if (typeof onLangChange === 'function') onLangChange(lang);
  },
  init() {
    this.set(this.current);
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
    });
  }
};

// ===== NAVBAR =====
const Navbar = {
  init() {
    const nav = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
      document.addEventListener('click', e => {
        if (!nav.contains(e.target)) navLinks.classList.remove('open');
      });
    }
    // Mark active link
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href') || '';
      a.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
    });
  }
};

// ===== AUDIO PLAYER =====
const Player = {
  audio: null,
  playlist: [],
  idx: 0,
  speeds: [0.75, 1, 1.25, 1.5, 2],
  speedIdx: 1,
  _closing: false,
  init() {
    this.audio = new Audio();
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.next());
    this.audio.addEventListener('error', () => { if (!this._closing) Toast.show('שגיאה בטעינת הקובץ', 'error'); });
    const tl = document.querySelector('.player-timeline');
    if (tl) tl.addEventListener('click', e => this.seek(e));
    const vol = document.querySelector('.vol-slider');
    if (vol) {
      vol.addEventListener('input', e => { this.audio.volume = e.target.value; });
      vol.value = 1;
    }
    document.querySelector('.player-play')?.addEventListener('click', () => this.toggle());
    document.querySelector('.player-prev')?.addEventListener('click', () => this.prev());
    document.querySelector('.player-next')?.addEventListener('click', () => this.next());
    document.querySelector('.player-close')?.addEventListener('click', () => this.close());
    document.querySelector('.player-close-btn')?.addEventListener('click', () => this.close());
    document.querySelector('.speed-btn')?.addEventListener('click', () => this.cycleSpeed());
    document.querySelector('.vol-icon')?.addEventListener('click', () => this.toggleMute());
    this.makeDraggable();
  },
  makeDraggable() {
    const handle = document.getElementById('playerHandle');
    const win    = document.getElementById('audioPlayer');
    if (!handle || !win) return;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0, dragging = false;
    const onMouseMove = (e) => {
      if (!dragging) return;
      const dx = e.clientX - startX, dy = e.clientY - startY;
      let newLeft = startLeft + dx, newTop = startTop + dy;
      newLeft = Math.max(0, Math.min(window.innerWidth  - win.offsetWidth,  newLeft));
      newTop  = Math.max(0, Math.min(window.innerHeight - win.offsetHeight, newTop));
      win.style.left   = newLeft + 'px';
      win.style.top    = newTop  + 'px';
      win.style.right  = 'auto';
      win.style.bottom = 'auto';
    };
    const onMouseUp = () => {
      dragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    handle.addEventListener('mousedown', (e) => {
      if (e.target.closest('.player-close-btn')) return;
      e.preventDefault();
      dragging = true;
      const r = win.getBoundingClientRect();
      startLeft = r.left; startTop = r.top;
      startX = e.clientX;  startY = e.clientY;
      win.style.transition = 'none';
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
    // Touch support
    handle.addEventListener('touchstart', (e) => {
      if (e.target.closest('.player-close-btn')) return;
      const t = e.touches[0];
      dragging = true;
      const r = win.getBoundingClientRect();
      startLeft = r.left; startTop = r.top;
      startX = t.clientX; startY = t.clientY;
      win.style.transition = 'none';
    }, { passive: true });
    handle.addEventListener('touchmove', (e) => {
      if (!dragging) return;
      const t = e.touches[0];
      const dx = t.clientX - startX, dy = t.clientY - startY;
      let newLeft = startLeft + dx, newTop = startTop + dy;
      newLeft = Math.max(0, Math.min(window.innerWidth  - win.offsetWidth,  newLeft));
      newTop  = Math.max(0, Math.min(window.innerHeight - win.offsetHeight, newTop));
      win.style.left   = newLeft + 'px';
      win.style.top    = newTop  + 'px';
      win.style.right  = 'auto';
      win.style.bottom = 'auto';
    }, { passive: true });
    handle.addEventListener('touchend', () => { dragging = false; });
  },
  play(track, list = []) {
    if (list.length) { this.playlist = list; this.idx = list.findIndex(t => t.id === track.id); }
    else { this.playlist = [track]; this.idx = 0; }
    this.loadTrack(this.playlist[this.idx]);
  },
  loadTrack(track) {
    if (!track) return;
    const resolved = resolveFileUrl(track.file);
    const src = resolved
      ? resolved
      : 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
    this.audio.src = src;
    this.audio.play().catch(() => {});
    this.showPlayer();
    this.updateUI(track);
    document.body.classList.add('player-open');
  },
  showPlayer() { document.querySelector('.audio-player')?.classList.add('active'); },
  toggle() {
    if (this.audio.paused) { this.audio.play(); this.setPlayIcon(true); }
    else { this.audio.pause(); this.setPlayIcon(false); }
  },
  setPlayIcon(playing) {
    const btn = document.querySelector('.player-play i');
    if (btn) btn.className = playing ? 'fas fa-pause' : 'fas fa-play';
  },
  next() { this.audio.currentTime = Math.min(this.audio.duration || 0, this.audio.currentTime + 10); },
  prev() { this.audio.currentTime = Math.max(0, this.audio.currentTime - 10); },
  close() {
    this._closing = true;
    this.audio.pause();
    this.audio.src = '';
    this.audio.load();
    setTimeout(() => { this._closing = false; }, 300);
    document.querySelector('.audio-player')?.classList.remove('active');
    document.body.classList.remove('player-open');
  },
  seek(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    let raw = (e.clientX - rect.left) / rect.width;
    // RTL pages fill the bar right→left, so invert the click percentage
    const isRTL = document.documentElement.dir === 'rtl' || document.body.dir === 'rtl';
    const pct = Math.max(0, Math.min(1, isRTL ? 1 - raw : raw));
    this.audio.currentTime = pct * (this.audio.duration || 0);
  },
  updateProgress() {
    const pct = this.audio.duration ? (this.audio.currentTime / this.audio.duration) * 100 : 0;
    const fill = document.querySelector('.player-fill');
    if (fill) fill.style.width = pct + '%';
    const cur = document.querySelector('.player-cur');
    const dur = document.querySelector('.player-dur');
    if (cur) cur.textContent = this.fmt(this.audio.currentTime);
    if (dur) dur.textContent = this.fmt(this.audio.duration || 0);
    this.setPlayIcon(!this.audio.paused);
  },
  fmt(s) {
    s = Math.floor(s || 0);
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    if (h) return `${h}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    return `${m}:${String(sec).padStart(2,'0')}`;
  },
  cycleSpeed() {
    this.speedIdx = (this.speedIdx + 1) % this.speeds.length;
    this.audio.playbackRate = this.speeds[this.speedIdx];
    const btn = document.querySelector('.speed-btn');
    if (btn) btn.textContent = this.speeds[this.speedIdx] + 'x';
  },
  toggleMute() { this.audio.muted = !this.audio.muted; },
  updateUI(track) {
    const lang = Lang.current;
    const title = lang === 'he' ? track.titleHe : (track.titleEn || track.titleHe);
    const el_title = document.querySelector('.player-title');
    const el_speaker = document.querySelector('.player-speaker');
    if (el_title) el_title.textContent = title;
    if (el_speaker) el_speaker.textContent = track.speaker || '';
    this.setPlayIcon(true);
  }
};

// ===== SEARCH ENGINE =====
const Search = {
  debounceTimer: null,
  filter(items, opts = {}) {
    let res = [...items];
    const { q, category, subcategory, speaker, year, dateFrom, dateTo, sort } = opts;
    if (q && q.trim()) {
      const ql = q.trim().toLowerCase();
      res = res.filter(item => {
        const fields = [item.titleHe, item.titleEn, item.descHe, item.descEn,
          item.speaker, item.author, ...(item.tags || [])];
        return fields.some(f => f && f.toLowerCase().includes(ql));
      });
    }
    if (category && category !== 'all') res = res.filter(i => i.category === category);
    if (subcategory && subcategory !== 'all') res = res.filter(i => i.subcategory === subcategory);
    if (speaker && speaker !== 'all') res = res.filter(i => i.speaker === speaker);
    // Year filter (new — replaces date range for lessons)
    if (year) res = res.filter(i => String(getLessonYear(i) || i.year || '') === String(year));
    // Legacy date-range filter (kept for backward compat, safe against missing date)
    if (dateFrom) res = res.filter(i => (i.date || '') >= dateFrom);
    if (dateTo)   res = res.filter(i => (i.date || '') <= dateTo);
    // Sort — use year as primary key (handles both old date-based and new year-based lessons)
    const getYr = i => getLessonYear(i) || i.year || 0;
    if (sort === 'newest')      res.sort((a,b) => getYr(b) - getYr(a) || (b.date||'').localeCompare(a.date||''));
    if (sort === 'oldest')      res.sort((a,b) => getYr(a) - getYr(b) || (a.date||'').localeCompare(b.date||''));
    if (sort === 'most-played') res.sort((a,b) => (b.plays||0) - (a.plays||0));
    if (sort === 'popular')     res.sort((a,b) => (b.downloads||0) - (a.downloads||0));
    if (sort === 'alpha')       res.sort((a,b) => (a.titleHe||'').localeCompare(b.titleHe||'', 'he'));
    return res;
  },
  highlight(text, q) {
    if (!q || !text) return text || '';
    const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }
};

// ===== PAGINATION =====
const Paginator = {
  page: 1,
  perPage: 12,
  total: 0,
  render(containerId, items, renderFn) {
    this.total = items.length;
    const start = (this.page - 1) * this.perPage;
    const pageItems = items.slice(start, start + this.perPage);
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!pageItems.length) {
      container.innerHTML = `<div class="empty-state fade-in"><div class="empty-icon">🔍</div><h3 data-he="לא נמצאו תוצאות" data-en="No Results Found">${Lang.t('no_results')}</h3><p data-he="נסה לשנות את הגדרות החיפוש" data-en="Try adjusting your search filters">Try adjusting your search filters</p></div>`;
    } else {
      container.innerHTML = pageItems.map(renderFn).join('');
      container.classList.add('fade-in');
    }
    this.renderPagination(items.length);
  },
  renderPagination(total) {
    const el = document.getElementById('pagination');
    if (!el) return;
    const pages = Math.ceil(total / this.perPage);
    if (pages <= 1) { el.innerHTML = ''; return; }
    let html = '';
    if (this.page > 1) html += `<button class="page-btn" onclick="Paginator.goTo(${this.page-1})"><i class="fas fa-chevron-right"></i></button>`;
    for (let i = 1; i <= pages; i++) {
      if (i === 1 || i === pages || Math.abs(i - this.page) <= 2) {
        html += `<button class="page-btn ${i===this.page?'active':''}" onclick="Paginator.goTo(${i})">${i}</button>`;
      } else if (Math.abs(i - this.page) === 3) {
        html += `<span style="color:var(--text-muted);padding:0 4px">...</span>`;
      }
    }
    if (this.page < pages) html += `<button class="page-btn" onclick="Paginator.goTo(${this.page+1})"><i class="fas fa-chevron-left"></i></button>`;
    el.innerHTML = html;
  },
  goTo(p) {
    this.page = p;
    if (typeof renderPage === 'function') renderPage();
    window.scrollTo({ top: 200, behavior: 'smooth' });
  }
};

// ===== TOAST =====
const Toast = {
  show(msg, type = 'info', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    const icons = { success: 'fas fa-check-circle', error: 'fas fa-times-circle', info: 'fas fa-info-circle' };
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="${icons[type]||icons.info}"></i> ${msg}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity='0'; toast.style.transform='translateY(-10px)'; toast.style.transition='.3s'; setTimeout(() => toast.remove(), 300); }, duration);
  }
};

// ===== MODAL =====
const Modal = {
  open(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.add('active'); document.body.style.overflow = 'hidden'; }
  },
  close(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.remove('active'); document.body.style.overflow = ''; }
  },
  init() {
    document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target === el) {
          const overlay = el.closest('.modal-overlay') || el.parentElement?.querySelector('.modal-overlay');
          if (overlay) overlay.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => { m.classList.remove('active'); document.body.style.overflow = ''; });
      }
    });
  }
};

// ===== FORM VALIDATION =====
const Form = {
  validate(formEl) {
    let valid = true;
    formEl.querySelectorAll('[required]').forEach(field => {
      field.classList.remove('error');
      if (!field.value.trim()) {
        field.classList.add('error');
        field.style.borderColor = 'var(--danger)';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    formEl.querySelectorAll('[type="email"]').forEach(field => {
      if (field.value && !/.+@.+\..+/.test(field.value)) {
        field.style.borderColor = 'var(--danger)';
        valid = false;
      }
    });
    return valid;
  }
};

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.count-animate');
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.target || counter.textContent.replace(/\D/g,''), 10);
    if (!target) return;
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      counter.textContent = Math.floor(current).toLocaleString();
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

// ===== SUBSCRIBE =====
function initSubscribe() {
  const form = document.getElementById('subscribeForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('[name="email"]')?.value?.trim();
    const name  = form.querySelector('[name="name"]')?.value?.trim();
    if (!email || !/.+@.+\..+/.test(email)) {
      Toast.show(Lang.t('invalid_email'), 'error'); return;
    }
    const subs = getData('subscribers');
    if (subs.find(s => s.email === email)) {
      Toast.show(Lang.current === 'he' ? 'כתובת זו כבר רשומה' : 'This email is already subscribed', 'info'); return;
    }
    subs.push({ id: nextId(subs), email, name, date: new Date().toISOString().split('T')[0] });
    setData('subscribers', subs);
    Toast.show(Lang.t('subscribe_success'), 'success');
    form.reset();
  });
}

// ===== CONTACT FORM =====
function initContact() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!Form.validate(form)) { Toast.show(Lang.t('required'), 'error'); return; }
    const data = Object.fromEntries(new FormData(form));
    const contacts = getData('contacts');
    contacts.push({ id: nextId(contacts), ...data, date: new Date().toISOString() });
    setData('contacts', contacts);
    Toast.show(Lang.t('contact_success'), 'success');
    form.reset();
  });
}

// ===== DONATION =====
function initDonate() {
  document.querySelectorAll('.amt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.amt-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const custom = document.getElementById('customAmount');
      if (custom) {
        if (btn.dataset.amount === 'custom') { custom.style.display = ''; custom.focus(); }
        else { custom.style.display = 'none'; custom.value = btn.dataset.amount; }
      }
    });
  });
  document.querySelectorAll('.pay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pay-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
  const form = document.getElementById('donateForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!Form.validate(form)) { Toast.show(Lang.t('required'), 'error'); return; }
    Toast.show(Lang.t('donate_success'), 'success');
    setTimeout(() => form.reset(), 500);
  });
}

// ===== LANGUAGE BADGE HELPER =====
function getLangBadge(langId, lang) {
  if (!langId) return '';
  const langObj = getLanguages().find(l => l.id === langId);
  if (!langObj) return '';
  const label = lang === 'he' ? langObj.he : langObj.en;
  return `<span class="badge" style="background:rgba(99,102,241,.1);color:#4f46e5;font-size:.68rem">${langObj.flag} ${label}</span>`;
}

// ===== LESSON CARD RENDERER =====
function renderLessonCard(lesson, q = '') {
  const lang = Lang.current;
  const title = lang === 'he' ? (lesson.titleHe||'') : (lesson.titleEn||lesson.titleHe||'');
  const desc  = lang === 'he' ? (lesson.descHe||'') : (lesson.descEn||lesson.descHe||'');
  const titleHl = Search.highlight(title, q);
  const catObj = getCategories('lessons').find(c => c.id === lesson.category);
  const catLabel = catObj ? (lang === 'he' ? catObj.he : catObj.en) : lesson.category;
  const subObj = lesson.subcategory ? catObj?.subs?.find(s => s.id === lesson.subcategory) : null;
  const subLabel = subObj ? (lang === 'he' ? subObj.he : subObj.en) : '';
  const tags = (lesson.tags||[]).slice(0,3).map(t => `<span class="tag">${t}</span>`).join('');
  return `
    <div class="card card-lesson" onclick="openLesson(${lesson.id})">
      <div class="card-lesson-head">
        <div class="lesson-icon"><i class="fas fa-headphones"></i></div>
        <div style="flex:1">
          <div class="lesson-title">${titleHl}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px">
            <span class="badge badge-gold">${catLabel}</span>
            ${subLabel ? `<span class="badge badge-blue">${subLabel}</span>` : ''}
            <span class="badge badge-blue"><i class="far fa-clock" style="margin-left:3px;margin-right:3px"></i>${lesson.duration}</span>
            ${getLangBadge(lesson.language, lang)}
            ${lesson.featured ? `<span class="badge badge-green"><i class="fas fa-star"></i></span>` : ''}
          </div>
        </div>
      </div>
      <div class="lesson-desc">${Search.highlight(desc, q)}</div>
      <div style="font-size:.76rem;color:var(--text-muted);margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px;align-items:center">
        ${toHebrewYear(getLessonYear(lesson)) ? `<span style="font-weight:600;color:var(--primary)"><i class="far fa-calendar-alt" style="margin-left:3px;margin-right:3px"></i>${toHebrewYear(getLessonYear(lesson))}</span>` : ''}
        <span><i class="fas fa-headphones" style="margin-left:3px;margin-right:3px;color:var(--primary);opacity:.7"></i>${(lesson.plays||0).toLocaleString()} ${lang==='he'?'שמיעות':'plays'}</span>
        <span><i class="fas fa-download" style="margin-left:3px;margin-right:3px"></i>${(lesson.downloads||0).toLocaleString()} ${lang==='he'?'הורדות':'DL'}</span>
      </div>
      <div class="tags">${tags}</div>
      <div class="lesson-actions" style="margin-top:12px">
        <button class="btn btn-dark btn-sm" onclick="event.stopPropagation();playLesson(${lesson.id})">
          <i class="fas fa-play"></i> <span data-he="השמע" data-en="Play">${lang==='he'?'השמע':'Play'}</span>
        </button>
        <button class="btn btn-outline-dark btn-sm" onclick="event.stopPropagation();downloadLesson(${lesson.id})">
          <i class="fas fa-download"></i> <span data-he="הורדה" data-en="Download">${lang==='he'?'הורדה':'Download'}</span>
        </button>
      </div>
    </div>`;
}

// ===== BOOK CARD RENDERER =====
function renderBookCard(book, q = '') {
  const lang = Lang.current;
  const title = lang === 'he' ? (book.titleHe||'') : (book.titleEn||book.titleHe||'');
  const desc  = lang === 'he' ? (book.descHe||'') : (book.descEn||book.descHe||'');
  const catObj = getCategories('books').find(c => c.id === book.category);
  const catLabel = catObj ? (lang === 'he' ? catObj.he : catObj.en) : book.category;
  const hyear = book.year ? toHebrewYear(book.year) : '';
  const langBadge = getLangBadge(book.language, lang);
  return `
    <div class="card card-book" style="cursor:pointer" onclick="openBook(${book.id})">
      <div class="book-cover">
        <div class="book-spine"></div>
        <div class="book-cover-inner">${book.cover||'📖'}</div>
        <span class="book-cat-badge">${catLabel}</span>
        ${book.featured ? '<span class="book-feat-badge"><i class="fas fa-star"></i></span>' : ''}
      </div>
      <div class="book-body">
        <div class="book-title">${Search.highlight(title, q)}</div>
        <div class="book-meta-row">
          ${hyear ? `<span class="badge badge-blue" style="font-size:.66rem">${hyear}</span>` : ''}
          ${book.pages ? `<span class="badge badge-blue" style="font-size:.66rem">${book.pages} ${lang==='he'?'עמ׳':'pp'}</span>` : ''}
          ${langBadge}
        </div>
        <div class="book-desc">${Search.highlight(desc, q)}</div>
        <div style="font-size:.72rem;color:var(--text-muted);margin-bottom:12px">
          <i class="fas fa-download" style="margin-left:3px;margin-right:3px"></i>${(book.downloads||0).toLocaleString()} ${lang==='he'?'הורדות':'downloads'}
        </div>
        <div class="book-actions" onclick="event.stopPropagation()">
          <button class="btn btn-dark btn-sm" style="flex:1;justify-content:center" onclick="openBookReader(${book.id})">
            <i class="fas fa-book-open"></i> ${lang==='he'?'קרא':'Read'}
          </button>
          <button class="btn btn-outline-dark btn-sm" style="flex:1;justify-content:center" onclick="downloadBook(${book.id})">
            <i class="fas fa-download"></i> ${lang==='he'?'הורד':'Download'}
          </button>
        </div>
      </div>
    </div>`;
}

// ===== GEO ANALYTICS =====
const GeoTracker = {
  _cache: null,
  _pending: null,
  async getGeo() {
    if (this._cache) return this._cache;
    if (this._pending) return this._pending;
    this._pending = fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => {
        this._cache = {
          code: d.country || '??',
          name: d.country_name || 'Unknown',
          city: d.city || '',
          flag: _countryFlag(d.country || '')
        };
        this._pending = null;
        return this._cache;
      })
      .catch(() => {
        this._cache = { code: '??', name: 'Unknown', city: '', flag: '🌍' };
        this._pending = null;
        return this._cache;
      });
    return this._pending;
  }
};

function _countryFlag(code) {
  if (!code || code.length !== 2) return '🌍';
  try {
    return [...code.toUpperCase()].map(c => String.fromCodePoint(c.charCodeAt(0) + 127397)).join('');
  } catch(e) { return '🌍'; }
}

function logAnalyticsEvent(type, contentType, contentId, title) {
  GeoTracker.getGeo().then(geo => {
    const events = getData('analytics');
    events.push({
      type,        // 'play' | 'download'
      contentType, // 'lesson' | 'book'
      contentId,
      title,
      country:     geo.code,
      countryName: geo.name,
      city:        geo.city,
      flag:        geo.flag,
      ts: new Date().toISOString()
    });
    // Keep last 2000 events to avoid storage bloat
    if (events.length > 2000) events.splice(0, events.length - 2000);
    setData('analytics', events);
  });
}

// ===== ONEDRIVE / FILE URL RESOLVER =====
/**
 * Converts a OneDrive share link to a direct-access URL via the OneDrive API.
 * Supports:
 *   https://1drv.ms/...           (personal OneDrive short link)
 *   https://onedrive.live.com/... (personal OneDrive full link)
 *   Regular URLs and relative paths are returned unchanged.
 */
function resolveFileUrl(fileRef) {
  if (!fileRef || fileRef === '#') return null;

  const isOneDrive = /1drv\.ms|onedrive\.live\.com/i.test(fileRef);
  if (isOneDrive) {
    // Base64url-encode the share URL per the OneDrive API spec
    const encoded = btoa(fileRef)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    return `https://api.onedrive.com/v1.0/shares/u!${encoded}/root/content`;
  }

  return fileRef; // relative path or any other URL — use as-is
}

// ===== HELPERS =====
function countDownload(id, type) {
  const items = getData(type);
  const item = items.find(i => i.id === id);
  if (item) {
    item.downloads = (item.downloads||0) + 1;
    setData(type, items);
    logAnalyticsEvent('download', type === 'lessons' ? 'lesson' : 'book', id, item.titleHe || '');
  }
}

function countPlay(id) {
  const items = getData('lessons');
  const item = items.find(i => i.id === id);
  if (item) {
    item.plays = (item.plays||0) + 1;
    setData('lessons', items);
    logAnalyticsEvent('play', 'lesson', id, item.titleHe || '');
  }
}

// Force-download a file instead of opening it in the browser.
// Uses fetch→blob (or XHR→blob as fallback) so the browser always
// saves the file rather than navigating to it (important for file:// protocol).
function forceDownload(url, filename) {
  if (!url || url === '#') { Toast.show('אין קובץ להורדה', 'error'); return; }
  const name = filename || 'download';

  function _saveBlobUrl(blob) {
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { try { URL.revokeObjectURL(blobUrl); a.remove(); } catch(e){} }, 1000);
  }

  function _xhrFallback() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = () => {
      // status 0 = success for file:// protocol
      if (xhr.status === 200 || xhr.status === 0) { _saveBlobUrl(xhr.response); }
      else { _anchorFallback(); }
    };
    xhr.onerror = _anchorFallback;
    xhr.send();
  }

  function _anchorFallback() {
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { try { a.remove(); } catch(e){} }, 300);
  }

  fetch(url)
    .then(r => r.blob())
    .then(blob => _saveBlobUrl(blob))
    .catch(() => _xhrFallback());
}

function downloadLesson(id) {
  const lesson = getData('lessons').find(l => l.id === id);
  if (!lesson) return;
  countDownload(id, 'lessons');
  forceDownload(resolveFileUrl(lesson.file), (lesson.titleHe || 'שיעור'));
}

function downloadBook(id) {
  const book = getData('books').find(b => b.id === id);
  if (!book) return;
  countDownload(id, 'books');
  forceDownload(resolveFileUrl(book.file), (book.titleHe || 'ספר'));
}

function playLesson(id) {
  const lessons = getData('lessons');
  const lesson = lessons.find(l => l.id === id);
  if (lesson) { countPlay(id); Player.play(lesson, lessons); }
}

function openLesson(id) {
  const lessons = getData('lessons');
  const lesson = lessons.find(l => l.id === id);
  if (!lesson) return;
  const lang = Lang.current;
  const title = lang === 'he' ? lesson.titleHe : (lesson.titleEn||lesson.titleHe);
  const desc  = lang === 'he' ? lesson.descHe  : (lesson.descEn||lesson.descHe);
  const tags  = (lesson.tags||[]).map(t => `<span class="tag">${t}</span>`).join('');
  const catObj = getCategories('lessons').find(c => c.id === lesson.category);
  const catLabel = catObj ? (lang === 'he' ? catObj.he : catObj.en) : lesson.category;
  const subObj = lesson.subcategory ? catObj?.subs?.find(s => s.id === lesson.subcategory) : null;
  const subLabel = subObj ? (lang === 'he' ? subObj.he : subObj.en) : '';
  const html = `
    <div class="modal-header">
      <h2 class="modal-title">${title}</h2>
      <button class="modal-close" onclick="Modal.close('lessonModal')"><i class="fas fa-times"></i></button>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">
      <span class="badge badge-gold">${catLabel}</span>
      ${subLabel ? `<span class="badge badge-blue">${subLabel}</span>` : ''}
      <span class="badge badge-blue"><i class="far fa-clock" style="margin:0 3px"></i>${lesson.duration}</span>
      ${getLangBadge(lesson.language, lang)}
      ${lesson.featured ? '<span class="badge badge-green"><i class="fas fa-star"></i> מומלץ</span>' : ''}
    </div>
    <div style="background:var(--cream);border-radius:var(--r-md);padding:14px 18px;margin-bottom:16px;display:flex;flex-wrap:wrap;gap:14px 24px">
      ${toHebrewYear(getLessonYear(lesson)) ? `<div style="display:flex;align-items:center;gap:6px;font-size:.85rem;color:var(--text-med)"><i class="far fa-calendar-alt" style="color:var(--primary)"></i><span style="font-weight:600">${toHebrewYear(getLessonYear(lesson))}</span></div>` : ''}
      ${lesson.speaker ? `<div style="display:flex;align-items:center;gap:6px;font-size:.85rem;color:var(--text-med)"><i class="fas fa-microphone" style="color:var(--primary)"></i><span>${lesson.speaker}</span></div>` : ''}
      <div style="display:flex;align-items:center;gap:6px;font-size:.85rem;color:var(--text-med)"><i class="fas fa-headphones" style="color:var(--primary)"></i><span>${(lesson.plays||0).toLocaleString()} ${lang==='he'?'שמיעות':'plays'}</span></div>
      <div style="display:flex;align-items:center;gap:6px;font-size:.85rem;color:var(--text-med)"><i class="fas fa-download" style="color:var(--primary)"></i><span>${(lesson.downloads||0).toLocaleString()} ${lang==='he'?'הורדות':'downloads'}</span></div>
    </div>
    <p style="margin-bottom:16px;line-height:1.8">${desc}</p>
    <div class="tags" style="margin-bottom:20px">${tags}</div>
    <div style="display:flex;gap:10px">
      <button class="btn btn-dark" style="flex:1;justify-content:center" onclick="playLesson(${lesson.id});Modal.close('lessonModal')">
        <i class="fas fa-play"></i> השמע
      </button>
      <button class="btn btn-outline-dark" style="flex:1;justify-content:center" onclick="downloadLesson(${lesson.id})">
        <i class="fas fa-download"></i> הורד
      </button>
    </div>`;
  const body = document.getElementById('lessonModalBody');
  if (body) body.innerHTML = html;
  Modal.open('lessonModal');
}

function openBook(id) {
  const books = getData('books');
  const book = books.find(b => b.id === id);
  if (!book) return;
  const lang = Lang.current;
  const title = lang === 'he' ? book.titleHe : (book.titleEn||book.titleHe);
  const desc  = lang === 'he' ? book.descHe  : (book.descEn||book.descHe);
  const tags  = (book.tags||[]).map(t => `<span class="tag">${t}</span>`).join('');
  const catObj = getCategories('books').find(c => c.id === book.category);
  const catLabel = catObj ? (lang === 'he' ? catObj.he : catObj.en) : book.category;
  const hyear = book.year ? toHebrewYear(book.year) : '';
  const html = `
    <div class="modal-header">
      <h2 class="modal-title">${title}</h2>
      <button class="modal-close" onclick="Modal.close('bookModal')"><i class="fas fa-times"></i></button>
    </div>
    <div style="text-align:center;font-size:72px;margin:16px 0;filter:drop-shadow(0 4px 12px rgba(0,0,0,.15))">${book.cover||'📖'}</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;justify-content:center">
      <span class="badge badge-gold">${catLabel}</span>
      ${hyear ? `<span class="badge badge-blue">${hyear}</span>` : ''}
      ${book.pages ? `<span class="badge badge-blue">${book.pages} ${lang==='he'?'עמ׳':'pp'}</span>` : ''}
      ${getLangBadge(book.language, lang)}
    </div>
    <div style="background:var(--cream);border-radius:var(--r-md);padding:14px 16px;margin-bottom:16px">
      <div style="font-size:.85rem;color:var(--text-light)"><i class="fas fa-download" style="margin:0 4px"></i>${(book.downloads||0).toLocaleString()} ${lang==='he'?'הורדות':'downloads'}</div>
    </div>
    <p style="margin-bottom:16px;line-height:1.8">${desc}</p>
    <div class="tags" style="margin-bottom:20px">${tags}</div>
    <div style="display:flex;gap:10px">
      <button class="btn btn-primary" style="flex:1;justify-content:center" onclick="Modal.close('bookModal');openBookReader(${book.id})">
        <i class="fas fa-book-open"></i> ${lang==='he'?'קרא באתר':'Read Online'}
      </button>
      <button class="btn btn-outline-dark" style="flex:1;justify-content:center" onclick="downloadBook(${book.id})">
        <i class="fas fa-download"></i> ${lang==='he'?'הורד':'Download'}
      </button>
    </div>`;
  const body = document.getElementById('bookModalBody');
  if (body) body.innerHTML = html;
  Modal.open('bookModal');
}

function openBookReader(id) {
  const book = getData('books').find(b => b.id === id);
  if (!book) return;
  const lang = Lang.current;
  const title = lang === 'he' ? book.titleHe : (book.titleEn||book.titleHe);
  const titleEl = document.getElementById('readerTitle');
  const frameEl = document.getElementById('readerFrame');
  const noFileEl = document.getElementById('readerNoFile');
  if (titleEl) titleEl.textContent = title;
  const fileUrl = resolveFileUrl(book.file);
  if (frameEl) { frameEl.src = fileUrl || ''; frameEl.style.display = fileUrl ? 'block' : 'none'; }
  if (noFileEl) noFileEl.style.display = fileUrl ? 'none' : 'flex';
  Modal.open('bookReaderModal');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initData();
  Lang.init();
  Navbar.init();
  Player.init();
  Modal.init();
  initSubscribe();
  initContact();
  initDonate();
  if (typeof initPage === 'function') initPage();
  setTimeout(animateCounters, 400);
});
