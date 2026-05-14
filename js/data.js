// =====================================================
// מכון תהלות ישראל — Mock Data
// =====================================================

const CATEGORIES_LESSONS = [
  { id: 'parasha',  he: 'פרשת השבוע',  en: 'Weekly Parasha',  subs: [
    { id: 'bereishit', he: 'בראשית', en: 'Bereishit' },
    { id: 'shemot',    he: 'שמות',   en: 'Shemot' },
    { id: 'vayikra',   he: 'ויקרא',  en: 'Vayikra' },
    { id: 'bamidbar',  he: 'במדבר',  en: 'Bamidbar' },
    { id: 'devarim',   he: 'דברים',  en: 'Devarim' },
  ]},
  { id: 'halacha',  he: 'הלכה',         en: 'Halacha',         subs: [
    { id: 'shabbat',   he: 'שבת',    en: 'Shabbat' },
    { id: 'kashrut',   he: 'כשרות', en: 'Kashrut' },
    { id: 'tefila_h',  he: 'תפילה', en: 'Prayer' },
    { id: 'family',    he: 'משפחה', en: 'Family Laws' },
  ]},
  { id: 'holidays', he: 'חגים ומועדים', en: 'Holidays',        subs: [
    { id: 'rosh_hashana', he: 'ראש השנה',  en: 'Rosh Hashana' },
    { id: 'yom_kippur',   he: 'יום כיפור', en: 'Yom Kippur' },
    { id: 'sukkot',       he: 'סוכות',     en: 'Sukkot' },
    { id: 'chanuka',      he: 'חנוכה',     en: 'Chanukah' },
    { id: 'purim',        he: 'פורים',     en: 'Purim' },
    { id: 'pesach',       he: 'פסח',       en: 'Pesach' },
    { id: 'shavuot',      he: 'שבועות',    en: 'Shavuot' },
  ]},
  { id: 'tefila',   he: 'תפילה',         en: 'Prayer',          subs: [
    { id: 'shacharit',        he: 'שחרית',    en: 'Shacharit' },
    { id: 'mincha',           he: 'מנחה',     en: 'Mincha' },
    { id: 'maariv',           he: 'מעריב',    en: 'Maariv' },
    { id: 'kabbalat_shabbat', he: 'קבלת שבת', en: 'Kabbalat Shabbat' },
  ]},
  { id: 'mussar',   he: 'מוסר',          en: 'Mussar',          subs: [] },
  { id: 'shlishis', he: 'סעודת שלישית', en: 'Seudas Shlishis', subs: [
    { id: 'bereishit', he: 'בראשית', en: 'Bereishit' },
    { id: 'shemot',    he: 'שמות',   en: 'Shemot' },
    { id: 'vayikra',   he: 'ויקרא',  en: 'Vayikra' },
    { id: 'bamidbar',  he: 'במדבר',  en: 'Bamidbar' },
    { id: 'devarim',   he: 'דברים',  en: 'Devarim' },
  ]},
];

const CATEGORIES_BOOKS = [
  { id: 'halacha',           he: 'הלכה',        en: 'Halacha',           subs: [
    { id: 'orach_chaim',  he: 'אורח חיים', en: 'Orach Chaim' },
    { id: 'yoreh_deah',   he: 'יורה דעה',  en: 'Yoreh Deah' },
    { id: 'even_haezer',  he: 'אבן העזר',  en: 'Even HaEzer' },
    { id: 'choshen',      he: 'חושן משפט', en: 'Choshen Mishpat' },
  ]},
  { id: 'drasha',            he: 'דרשות',       en: 'Sermons',           subs: [] },
  { id: 'kabala',            he: 'קבלה',         en: 'Kabbalah',          subs: [] },
  { id: 'moadim',            he: 'מועדים',       en: 'Holidays',          subs: [] },
  { id: 'pamphlets',         he: 'עלונים',       en: 'Pamphlets',         subs: [] },
  { id: 'parashat_hashavua', he: 'פרשת השבוע',  en: 'Parashat Hashavua', subs: [] },
  { id: 'glionot',           he: 'גליונות',      en: 'Weekly Sheets',     subs: [] },
];

const LANGUAGES = [
  { id: 'he', he: 'עברית',       en: 'Hebrew',         flag: 'IL' },
  { id: 'en', he: 'אנגלית',      en: 'English',        flag: 'EN' },
  { id: 'yi', he: 'אידיש',       en: 'Yiddish',        flag: 'YD' },
  { id: 'lh', he: 'לשון הקודש',  en: 'Lashon Hakodesh',flag: 'LH' },
];

const SPEAKERS = [
  'הרב מרדכי כהן שליט"א',
  'הרב יצחק לוי שליט"א',
  'הרב שמואל גולדברג שליט"א',
  'הרב אברהם פרידמן שליט"א',
  'הרב דוד רוזנברג שליט"א',
];

const INITIAL_LESSONS = [
  {
    id: 3, year: 2017,
    titleHe: 'סעודת שלישית תזריע מצורע תשע"ז',
    titleEn:  'Seudas Shlishis Tazria Metzora 5777',
    category: 'shlishis', subcategory: 'vayikra',
    duration: '2:31:51', language: 'yi',
    descHe: 'דברי תורה שנאמרו בסעודת שלישית פרשת תזריע מצורע תשע"ז',
    descEn:  'Torah words said at Seudas Shlishis Parashas Tazria Metzora 5777',
    tags: [], featured: false, downloads: 2, plays: 4,
    file: 'lessons/סש_פ _תזריע_מצורע_תשעז.MP3'
  },
  {
    id: 2, year: 2013,
    titleHe: 'סעודת שלישית פרשת אחרי קדושים תשע"ג',
    titleEn:  'Seudas Shlishis Parashas Acharei Kedoshim 5773',
    category: 'shlishis', subcategory: 'vayikra',
    duration: '1:51:22', language: 'yi',
    descHe: 'דברי תורה שנאמרו בסעודת שלישית פרשת אחרי קדושים תשע"ג',
    descEn:  'Torah words said at Seudas Shlishis Parashas Acharei Kedoshim 5773',
    tags: [], featured: false, downloads: 6, plays: 9,
    file: 'lessons/סש_פ_אחרי_קדושים_תשעג.MP3'
  },
  {
    id: 1, year: 2013,
    titleHe: 'דברי תורה שנאמרו בסעודת שלישית פרשת בהר בחקותי תשע"ג',
    titleEn:  'Seudas Shlishis Parashas Behar Bechukosai 5773',
    category: 'shlishis', subcategory: 'vayikra',
    duration: '1:55:03', language: 'yi',
    descHe: 'דברי תורה שנאמרו בסעודת שלישית פרשת בהר בחקותי תשע"ג',
    descEn:  'Torah words said at Seudas Shlishis Parashas Behar Bechukosai 5773',
    tags: [], featured: false, downloads: 6, plays: 3,
    file: 'lessons/סש_פ_בהר_בחקותי_תשעג.MP3'
  },
  {
    id: 4, year: 2018,
    titleHe: 'סעודת שלישית אמור תשע"ח',
    titleEn:  'Seudas Shlishis Emor 5778',
    category: 'shlishis', subcategory: 'vayikra',
    duration: '2:48:38', language: 'yi',
    descHe: 'דברי תורה שנאמרו בסעודת שלישית פרשת אמור תשע"ח',
    descEn:  'Torah words said at Seudas Shlishis Parashas Emor 5778',
    tags: [], featured: false, downloads: 0, plays: 0,
    file: 'lessons/סש_פ_אמור_תשעח.MP3'
  },
];

const INITIAL_BOOKS = [
  {
    id: 1,
    titleHe: 'גליון מקוצר פרשת בהר - בחקותי',
    titleEn:  'Glion Mkotzr Parashas Behar Bechukosai',
    category: 'glionot', language: 'lh',
    year: 2020, pages: 12,
    descHe: 'גליון מקוצר לכבוד פרשת בהר - בחקותי תש"פ',
    descEn:  'Weekly sheet for Parashas Behar Bechukosai 5780',
    tags: [], featured: false,
    cover: '📖', downloads: 5,
    file: 'books/בהר-בחקתי תשפ.pdf'
  },
  {
    id: 2,
    titleHe: "גליון פרשת בהר בחקותי תשפ\"ו",
    titleEn:  'Glion Parashas Behar Bechukosai 5786',
    category: 'glionot', language: 'lh',
    year: 2026, pages: 0,
    descHe: "גליון לכבוד פרשת בהר בחקותי תשפ\"ו",
    descEn:  'Weekly sheet for Parashas Behar Bechukosai 5786',
    tags: [], featured: false,
    cover: '📖', downloads: 0,
    file: "books/גליון פרשת בהר בחקתי תשפ''ו.pdf"
  },
];

const INITIAL_UPDATES = [
  { id: 1, titleHe: 'פתיחת הסמסטר תשפ"ה — לוח שיעורים חדש', titleEn: 'Opening of Semester 5785 — New Lesson Schedule', date: '2024-10-01', category: 'schedule', contentHe: 'בשעה טובה ומוצלחת פותח המכון את שנת תשפ"ה עם מגוון רחב של שיעורים חדשים. לוח השיעורים המלא מפורסם באתר.', contentEn: 'With blessing, the Institute opens the year 5785 with a wide variety of new lessons. The full schedule is published on the website.', featured: true, image: '📅' },
  { id: 2, titleHe: 'ערב שיעורים מיוחד — לכבוד חנוכה', titleEn: 'Special Learning Evening — In Honor of Chanukah', date: '2024-12-10', category: 'event', contentHe: 'המכון שמח להזמין את הציבור לערב שיעורים מיוחד לכבוד חנוכה, בו יישאו דברים גדולי תורה וחסידות.', contentEn: 'The Institute is pleased to invite the public to a special learning evening in honor of Chanukah, featuring addresses by Torah and Chassidut scholars.', featured: true, image: '🕎' },
  { id: 3, titleHe: 'יציאת ספר חדש — "ביאור על מסכת אבות"', titleEn: 'New Book Release — "Commentary on Pirkei Avot"', date: '2024-09-15', category: 'publication', contentHe: 'אנו שמחים לבשר על יציאתו לאור של ספרו החדש של הרב שמואל גולדברג שליט"א — "ביאור על מסכת אבות".', contentEn: 'We are pleased to announce the publication of Rabbi Shmuel Goldberg\'s new book — "Commentary on Pirkei Avot".', featured: false, image: '📚' },
  { id: 4, titleHe: 'עדכון שעות פתיחת הספריה', titleEn: 'Library Opening Hours Update', date: '2024-11-01', category: 'announcement', contentHe: 'לתשומת לב הציבור: שעות פתיחת הספרייה עודכנו. ניתן להגיע בימים א׳-ה׳ בין השעות 9:00-21:00.', contentEn: 'Public notice: Library opening hours have been updated. Available Sunday-Thursday from 9:00 AM to 9:00 PM.', featured: false, image: '📢' },
  { id: 5, titleHe: 'קורס אינטנסיבי — "יסודות ההלכה"', titleEn: 'Intensive Course — "Foundations of Halacha"', date: '2024-11-20', category: 'event', contentHe: 'המכון מקיים קורס אינטנסיבי של שלושה ימים בנושא יסודות ההלכה. למידע נוסף ולהרשמה צרו קשר.', contentEn: 'The Institute is holding a three-day intensive course on the foundations of Halacha. For more information and registration, please contact us.', featured: true, image: '🎓' },
  { id: 6, titleHe: 'שיעור מיוחד — זכרון לנשמת המנוח', titleEn: 'Special Lesson — In Memory of the Departed', date: '2024-10-28', category: 'event', contentHe: 'לזכרו של הרב יוסף שליט"א, יתקיים שיעור מיוחד לעילוי נשמתו. כל הציבור מוזמן.', contentEn: 'In memory of Rabbi Yosef z"l, a special lesson will be held to elevate his soul. The entire public is invited.', featured: false, image: '🕯️' },
];

// ===== HEBREW DATE UTILITIES =====

// Gematria numeral values (greedy subtraction order)
const _HE_VALS = [
  [400,'ת'],[300,'ש'],[200,'ר'],[100,'ק'],
  [90,'צ'],[80,'פ'],[70,'ע'],[60,'ס'],[50,'נ'],[40,'מ'],[30,'ל'],[20,'כ'],[10,'י'],
  [9,'ט'],[8,'ח'],[7,'ז'],[6,'ו'],[5,'ה'],[4,'ד'],[3,'ג'],[2,'ב'],[1,'א']
];

// Convert a number to Hebrew letters (without punctuation)
function _hebrewNumeral(n) {
  if (n === 15) return 'טו';   // special: avoid י"ה (God's name)
  if (n === 16) return 'טז';   // special: avoid י"ו
  let s = '', rem = n;
  for (const [val, letter] of _HE_VALS) {
    while (rem >= val) { s += letter; rem -= val; }
  }
  return s;
}

// Add gershayim (״) before last letter, or geresh (׳) for single letter
function _addGershayim(s) {
  if (!s) return s;
  if (s.length === 1) return s + '׳';           // ׳ geresh
  return s.slice(0, -1) + '״' + s.slice(-1);   // ״ gershayim before last
}

// Full Hebrew date — e.g. "כ״ד באייר תשפ״ו"
function toHebrewDate(dateStr) {
  if (!dateStr) return '';
  try {
    const p = String(dateStr).split('-').map(Number);
    if (p.length < 3 || isNaN(p[0])) return dateStr;
    const date = new Date(p[0], p[1]-1, p[2]);
    const parts = new Intl.DateTimeFormat('he-IL-u-ca-hebrew', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).formatToParts(date);
    // Replace only the numeric day and year parts; keep literals (spaces, ב prefix) as-is
    return parts.map(part => {
      if (part.type === 'day')  return _addGershayim(_hebrewNumeral(parseInt(part.value)));
      if (part.type === 'year') return _addGershayim(_hebrewNumeral(parseInt(part.value) % 1000));
      return part.value;
    }).join('');
  } catch(e) { return dateStr; }
}

// Hebrew year only — e.g. "תשפ״ו"
function toHebrewYear(gregYear) {
  if (!gregYear) return '';
  try {
    const date = new Date(Number(gregYear), 5, 15);
    const parts = new Intl.DateTimeFormat('he-IL-u-ca-hebrew', { year: 'numeric' }).formatToParts(date);
    const yearPart = parts.find(p => p.type === 'year');
    if (!yearPart) return String(gregYear);
    return _addGershayim(_hebrewNumeral(parseInt(yearPart.value) % 1000));
  } catch(e) { return String(gregYear); }
}

// Backward-compat helper — returns the lesson's year as a Gregorian number.
// New lessons store lesson.year directly; old ones stored lesson.date ('YYYY-MM-DD').
function getLessonYear(lesson) {
  if (!lesson) return null;
  if (lesson.year) return Number(lesson.year);
  if (lesson.date) return parseInt(String(lesson.date).split('-')[0]);
  return null;
}

// Recursive category lookup — works across all sub-levels
function findCatNode(id, cats) {
  for (const c of (cats || [])) {
    if (c.id === id) return c;
    if (c.subs?.length) { const f = findCatNode(id, c.subs); if (f) return f; }
  }
  return null;
}

// Flatten all category IDs in a subtree (for search)
function flatCatIds(cat) {
  const ids = [cat.id];
  (cat.subs || []).forEach(s => ids.push(...flatCatIds(s)));
  return ids;
}

// Initialize data in localStorage if not present
function initData() {
  // v3 migration: clear demo data, ready for real use
  if (!localStorage.getItem('ti_schema_v3')) {
    localStorage.removeItem('ti_lessons');
    localStorage.removeItem('ti_books');
    localStorage.removeItem('ti_updates');
    localStorage.setItem('ti_schema_v3', '1');
  }
  // v4 migration: sync categories & languages to match production data
  if (!localStorage.getItem('ti_schema_v4')) {
    localStorage.removeItem('ti_cat_lessons');
    localStorage.removeItem('ti_cat_books');
    localStorage.removeItem('ti_languages');
    localStorage.setItem('ti_schema_v4', '1');
  }
  // v5 migration: sync lessons & books content from INITIAL data
  if (!localStorage.getItem('ti_schema_v5')) {
    localStorage.removeItem('ti_lessons');
    localStorage.removeItem('ti_books');
    localStorage.setItem('ti_schema_v5', '1');
  }
  // v6 migration: add missing lessons & books (Emor 5778, Behar-Bechukosai 5786 sheet)
  if (!localStorage.getItem('ti_schema_v6')) {
    localStorage.removeItem('ti_lessons');
    localStorage.removeItem('ti_books');
    localStorage.setItem('ti_schema_v6', '1');
  }
  if (!localStorage.getItem('ti_lessons'))  setData('lessons', INITIAL_LESSONS);
  if (!localStorage.getItem('ti_books'))    setData('books',   INITIAL_BOOKS);
  if (!localStorage.getItem('ti_updates'))  setData('updates', []);
  if (!localStorage.getItem('ti_cat_lessons')) {
    localStorage.setItem('ti_cat_lessons', JSON.stringify(CATEGORIES_LESSONS));
  }
  if (!localStorage.getItem('ti_cat_books')) {
    localStorage.setItem('ti_cat_books', JSON.stringify(CATEGORIES_BOOKS));
  }
  if (!localStorage.getItem('ti_languages')) {
    localStorage.setItem('ti_languages', JSON.stringify(LANGUAGES));
  }
  if (!localStorage.getItem('ti_users')) {
    localStorage.setItem('ti_users', JSON.stringify([
      { id: 1, name: 'Admin', username: 'admin', password: 'admin123', role: 'admin',
        email: 'admin@tehillotisrael.org', active: true, created: '2024-01-01',
        permissions: { upload_lessons:true,upload_books:true,edit_content:true,
          delete_content:true,manage_categories:true,manage_users:true,view_stats:true } },
      { id: 2, name: 'עורך תוכן', username: 'editor', password: 'editor123', role: 'editor',
        email: 'editor@tehillotisrael.org', active: true, created: '2024-03-15',
        permissions: { upload_lessons:true,upload_books:true,edit_content:true,
          delete_content:false,manage_categories:false,manage_users:false,view_stats:true } },
    ]));
  }
  if (!localStorage.getItem('ti_login_attempts')) setData('login_attempts', []);
  if (!localStorage.getItem('ti_subscribers'))    setData('subscribers', []);
  if (!localStorage.getItem('ti_contacts'))       setData('contacts', []);
  if (!localStorage.getItem('ti_analytics'))      setData('analytics', []);
}

function getCategories(type) {
  try {
    const stored = localStorage.getItem('ti_cat_' + type);
    if (stored) {
      const cats = JSON.parse(stored);
      const defaults = type === 'lessons' ? CATEGORIES_LESSONS : CATEGORIES_BOOKS;
      return cats.map(c => {
        if (!Array.isArray(c.subs)) {
          const def = defaults.find(d => d.id === c.id);
          return { ...c, subs: def?.subs || [] };
        }
        return c;
      });
    }
  } catch(e) {}
  return type === 'lessons' ? CATEGORIES_LESSONS : CATEGORIES_BOOKS;
}

function getLanguages() {
  try {
    const stored = localStorage.getItem('ti_languages');
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  return LANGUAGES;
}

function getData(key) {
  try { return JSON.parse(localStorage.getItem('ti_' + key)) || []; }
  catch(e) { return []; }
}

function setData(key, val) {
  localStorage.setItem('ti_' + key, JSON.stringify(val));
}

function nextId(arr) {
  return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1;
}
