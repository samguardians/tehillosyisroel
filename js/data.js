// =====================================================
// מכון תהלות ישראל — Mock Data
// =====================================================

const CATEGORIES_LESSONS = [
  { id: 'parasha',  he: 'פרשת השבוע',  en: 'Weekly Parasha',       subs: [
    { id: 'bereishit', he: 'בראשית', en: 'Bereishit' },
    { id: 'shemot',    he: 'שמות',   en: 'Shemot' },
    { id: 'vayikra',   he: 'ויקרא',  en: 'Vayikra' },
    { id: 'bamidbar',  he: 'במדבר',  en: 'Bamidbar' },
    { id: 'devarim',   he: 'דברים',  en: 'Devarim' },
  ]},
  { id: 'halacha',  he: 'הלכה',         en: 'Halacha',              subs: [
    { id: 'shabbat',   he: 'שבת',        en: 'Shabbat' },
    { id: 'kashrut',   he: 'כשרות',      en: 'Kashrut' },
    { id: 'tefila_h',  he: 'תפילה',      en: 'Prayer' },
    { id: 'family',    he: 'משפחה',      en: 'Family Laws' },
  ]},
  { id: 'aggada',   he: 'אגדה',          en: 'Aggada',               subs: [] },
  { id: 'holidays', he: 'חגים ומועדים', en: 'Holidays',              subs: [
    { id: 'rosh_hashana', he: 'ראש השנה',  en: 'Rosh Hashana' },
    { id: 'yom_kippur',   he: 'יום כיפור', en: 'Yom Kippur' },
    { id: 'sukkot',       he: 'סוכות',     en: 'Sukkot' },
    { id: 'chanuka',      he: 'חנוכה',     en: 'Chanukah' },
    { id: 'purim',        he: 'פורים',     en: 'Purim' },
    { id: 'pesach',       he: 'פסח',       en: 'Pesach' },
    { id: 'shavuot',      he: 'שבועות',    en: 'Shavuot' },
  ]},
  { id: 'machshava',he: 'מחשבה',        en: 'Jewish Thought',       subs: [
    { id: 'emuna',    he: 'אמונה',        en: 'Faith' },
    { id: 'bitachon', he: 'בטחון',        en: 'Trust in God' },
    { id: 'teshuva',  he: 'תשובה',        en: 'Repentance' },
  ]},
  { id: 'tefila',   he: 'תפילה',         en: 'Prayer',               subs: [
    { id: 'shacharit', he: 'שחרית',  en: 'Shacharit' },
    { id: 'mincha',    he: 'מנחה',   en: 'Mincha' },
    { id: 'maariv',    he: 'מעריב',  en: 'Maariv' },
    { id: 'kabbalat_shabbat', he: 'קבלת שבת', en: 'Kabbalat Shabbat' },
  ]},
  { id: 'mussar',   he: 'מוסר',          en: 'Mussar',               subs: [] },
  { id: 'kabala',   he: 'קבלה וחסידות', en: 'Kabbalah & Chassidut', subs: [] },
  { id: 'gemara',   he: 'גמרא',          en: 'Gemara',               subs: [
    { id: 'brachot',   he: 'ברכות',      en: 'Brachot' },
    { id: 'shabbat_g', he: 'שבת',        en: 'Shabbat' },
    { id: 'ketubot',   he: 'כתובות',     en: 'Ketubot' },
    { id: 'bava_metzia',he: 'בבא מציעא', en: 'Bava Metzia' },
  ]},
  { id: 'tanach',   he: 'תנ״ך',          en: 'Tanach',               subs: [
    { id: 'torah',    he: 'תורה',         en: 'Torah' },
    { id: 'neviim',   he: 'נביאים',       en: 'Prophets' },
    { id: 'ketuvim',  he: 'כתובים',       en: 'Writings' },
  ]},
];

const CATEGORIES_BOOKS = [
  { id: 'halacha',   he: 'הלכה',          en: 'Halacha',             subs: [
    { id: 'orach_chaim',  he: 'אורח חיים',   en: 'Orach Chaim' },
    { id: 'yoreh_deah',   he: 'יורה דעה',    en: 'Yoreh Deah' },
    { id: 'even_haezer',  he: 'אבן העזר',    en: 'Even HaEzer' },
    { id: 'choshen',      he: 'חושן משפט',   en: 'Choshen Mishpat' },
  ]},
  { id: 'drasha',    he: 'דרשות',          en: 'Sermons',             subs: [] },
  { id: 'sidur',     he: 'סידורים',        en: 'Prayer Books',        subs: [] },
  { id: 'machshava', he: 'מחשבה',         en: 'Jewish Thought',      subs: [] },
  { id: 'kabala',    he: 'קבלה',           en: 'Kabbalah',            subs: [] },
  { id: 'responsa',  he: 'שו"ת',           en: 'Responsa',            subs: [] },
  { id: 'moadim',    he: 'מועדים',         en: 'Holidays',            subs: [] },
  { id: 'parshanut', he: 'פרשנות',         en: 'Biblical Commentary', subs: [] },
  { id: 'biography', he: 'ביוגרפיה',      en: 'Biography',           subs: [] },
  { id: 'pamphlets', he: 'עלונים',         en: 'Pamphlets',           subs: [] },
];

const LANGUAGES = [
  { id: 'he', he: 'עברית',  en: 'Hebrew',  flag: '🇮🇱' },
  { id: 'en', he: 'אנגלית', en: 'English', flag: '🇬🇧' },
  { id: 'yi', he: 'אידיש',  en: 'Yiddish', flag: '✡️' },
  { id: 'fr', he: 'צרפתית', en: 'French',  flag: '🇫🇷' },
  { id: 'ru', he: 'רוסית',  en: 'Russian', flag: '🇷🇺' },
  { id: 'es', he: 'ספרדית', en: 'Spanish', flag: '🇪🇸' },
];

const SPEAKERS = [
  'הרב מרדכי כהן שליט"א',
  'הרב יצחק לוי שליט"א',
  'הרב שמואל גולדברג שליט"א',
  'הרב אברהם פרידמן שליט"א',
  'הרב דוד רוזנברג שליט"א',
];

const INITIAL_LESSONS = [
  { id: 1, titleHe: 'פרשת בראשית — תחילתו של הכל', titleEn: 'Parashat Bereishit — The Beginning of All', category: 'parasha', speaker: 'הרב מרדכי כהן שליט"א', date: '2024-10-05', duration: '48:22', descHe: 'שיעור מרתק על פרשת בראשית ותחילת הבריאה, עם דגש על אמירת חז"ל בנוגע לבריאת האדם.', descEn: 'A fascinating lesson on Parashat Bereishit and the creation, focusing on the Sages\' teachings about the creation of man.', tags: ['בראשית', 'בריאה', 'אדם הראשון'], downloads: 1240, featured: true, file: '#' },
  { id: 2, titleHe: 'הלכות שבת — מלאכת בישול', titleEn: 'Shabbat Laws — Cooking', category: 'halacha', speaker: 'הרב יצחק לוי שליט"א', date: '2024-10-12', duration: '1:02:15', descHe: 'סקירה מקיפה של הלכות בישול בשבת, הגדרת מלאכה ודיני חם וקר.', descEn: 'A comprehensive review of Shabbat cooking laws, defining the melacha and laws of hot and cold.', tags: ['שבת', 'בישול', 'הלכה'], downloads: 985, featured: true, file: '#' },
  { id: 3, titleHe: 'ימי חנוכה — אור בחשיכה', titleEn: 'Chanukah — Light in the Darkness', category: 'holidays', speaker: 'הרב שמואל גולדברג שליט"א', date: '2024-12-01', duration: '55:40', descHe: 'הרהורים על נס חנוכה ועל פיסת האור שמנצחת את החושך, בדורנו ובכל הדורות.', descEn: 'Reflections on the Chanukah miracle and the light that overcomes darkness in our generation and throughout history.', tags: ['חנוכה', 'אור', 'גלות'], downloads: 2105, featured: true, file: '#' },
  { id: 4, titleHe: 'אמונה ובטחון — יסודות הנפש', titleEn: 'Faith and Trust — Foundations of the Soul', category: 'machshava', speaker: 'הרב אברהם פרידמן שליט"א', date: '2024-09-20', duration: '42:10', descHe: 'מה ההבדל בין אמונה לבטחון? כיצד מחנכים את הנפש להישען על ה׳ בכל מצב?', descEn: 'What is the difference between faith and trust? How do we train the soul to lean on God in every situation?', tags: ['אמונה', 'בטחון', 'מחשבה'], downloads: 732, featured: false, file: '#' },
  { id: 5, titleHe: 'תפילת שחרית — עיון בסידור', titleEn: 'Morning Prayer — Siddur Study', category: 'tefila', speaker: 'הרב דוד רוזנברג שליט"א', date: '2024-10-18', duration: '38:55', descHe: 'עיון מעמיק במילות תפילת שחרית, משמעותן וחיוניותן בחיי היומיום.', descEn: 'A deep study of the morning prayer words, their meaning and importance in daily life.', tags: ['תפילה', 'שחרית', 'סידור'], downloads: 545, featured: false, file: '#' },
  { id: 6, titleHe: 'פרשת נח — ה"שפה" המשותפת', titleEn: 'Parashat Noach — The Common Language', category: 'parasha', speaker: 'הרב מרדכי כהן שליט"א', date: '2024-10-26', duration: '51:08', descHe: 'דרשה על מגדל בבל ומשמעות הפיצול של האנושות, לאן מוביל הפירוד ולמה אנו שואפים.', descEn: 'A sermon on the Tower of Babel and the splitting of humanity — where division leads and what we aspire to.', tags: ['נח', 'בבל', 'פרשה'], downloads: 880, featured: false, file: '#' },
  { id: 7, titleHe: 'מוסר — כיבוד אב ואם', titleEn: 'Mussar — Honoring Parents', category: 'mussar', speaker: 'הרב שמואל גולדברג שליט"א', date: '2024-11-03', duration: '44:20', descHe: 'עיון בחשיבות מצוות כיבוד אב ואם, בראי ספרי המוסר וסיפורי הצדיקים.', descEn: 'Examination of the importance of honoring one\'s parents through the lens of Mussar literature and stories of the righteous.', tags: ['מוסר', 'כיבוד הורים', 'מצוות'], downloads: 612, featured: false, file: '#' },
  { id: 8, titleHe: 'קבלת שבת — כניסה למקדש מעט', titleEn: 'Kabbalat Shabbat — Entering the Sanctuary', category: 'tefila', speaker: 'הרב יצחק לוי שליט"א', date: '2024-11-08', duration: '33:14', descHe: 'על הפיוטים ומנגינות קבלת שבת ומשמעותם הרוחנית העמוקה בהלכה ובקבלה.', descEn: 'On the liturgical poems and melodies of Kabbalat Shabbat and their deep spiritual meaning in Halacha and Kabbalah.', tags: ['שבת', 'תפילה', 'קבלה'], downloads: 1087, featured: true, file: '#' },
  { id: 9, titleHe: 'עסק בתורה לשמה', titleEn: 'Torah Study for Its Own Sake', category: 'machshava', speaker: 'הרב אברהם פרידמן שליט"א', date: '2024-11-15', duration: '49:33', descHe: 'מה פירוש "לשמה" בלימוד תורה? כיצד מגיעים לרמה הזאת ומה מעכב?', descEn: 'What does "lishmah" mean in Torah study? How does one reach that level and what hinders it?', tags: ['תורה', 'לשמה', 'מחשבה'], downloads: 890, featured: false, file: '#' },
  { id: 10, titleHe: 'ימי ראש השנה — חשבון הנפש', titleEn: 'Rosh Hashana — Soul Accounting', category: 'holidays', speaker: 'הרב דוד רוזנברג שליט"א', date: '2024-09-28', duration: '57:45', descHe: 'ימים אלה מוציאים אותנו מהשגרה ומכריחים אותנו לבחון: האם החיים שלנו הם החיים שרצינו?', descEn: 'These Days of Awe take us out of routine and force us to examine: are we living the life we wanted?', tags: ['ראש השנה', 'תשובה', 'חגים'], downloads: 3200, featured: true, file: '#' },
  { id: 11, titleHe: 'גמרא ברכות — תפילת הדרך', titleEn: 'Gemara Brachot — Traveler\'s Prayer', category: 'gemara', speaker: 'הרב מרדכי כהן שליט"א', date: '2024-08-10', duration: '1:15:22', descHe: 'שיעור בגמרא מסכת ברכות, עיון בסוגיית תפילת הדרך והשלכותיה ההלכתיות.', descEn: 'Gemara lesson on tractate Brachot, analyzing the traveler\'s prayer and its halachic implications.', tags: ['גמרא', 'ברכות', 'תפילה'], downloads: 420, featured: false, file: '#' },
  { id: 12, titleHe: 'ספר איוב — צדיק ורע לו', titleEn: 'Book of Job — The Righteous Who Suffers', category: 'tanach', speaker: 'הרב יצחק לוי שליט"א', date: '2024-07-22', duration: '1:08:11', descHe: 'עיון עמוק בספר איוב ושאלת הצדיק הסובל — כיצד מתמודדת תורתנו עם השאלה הקשה ביותר.', descEn: 'A deep study of the Book of Job and the question of the suffering righteous person — how Torah addresses this hardest question.', tags: ['איוב', 'תנ"ך', 'צדיק'], downloads: 765, featured: false, file: '#' },
];

const INITIAL_BOOKS = [
  { id: 1, titleHe: 'אור הלבנה — חידושי תורה', titleEn: 'Or Halevana — Torah Novellae', category: 'drasha', author: 'הרב מרדכי כהן שליט"א', year: 2023, pages: 320, descHe: 'ספר חידושים על הפרשיות ומועדים, עם ביאורים עמוקים על פי גישת הדרש והנגלה.', descEn: 'A book of novellae on the weekly portions and holidays, with deep explanations following the homiletic approach.', tags: ['חידושים', 'פרשיות', 'מועדים'], downloads: 2140, featured: true, cover: '📖', file: '#' },
  { id: 2, titleHe: 'שאלות ותשובות תהלות ישראל', titleEn: 'Responsa Tehillot Israel', category: 'responsa', author: 'הרב מרדכי כהן שליט"א', year: 2021, pages: 480, descHe: 'שאלות ותשובות בענייני הלכה, הכוללים שאלות מכל רחבי תפוצות ישראל.', descEn: 'Halachic responsa covering questions from Jewish communities worldwide.', tags: ['שו"ת', 'הלכה', 'תשובות'], downloads: 1875, featured: true, cover: '📜', file: '#' },
  { id: 3, titleHe: 'ליקוטי תפילות', titleEn: 'Collected Prayers', category: 'sidur', author: 'מכון תהלות ישראל', year: 2022, pages: 248, descHe: 'ליקוט מיוחד של תפילות, תחינות ובקשות לכל עת ומצב בחיי האדם.', descEn: 'A special collection of prayers, supplications and requests for every time and situation in life.', tags: ['תפילה', 'תחינות', 'בקשות'], downloads: 3210, featured: true, cover: '🕍', file: '#' },
  { id: 4, titleHe: 'ביאור על מסכת אבות', titleEn: 'Commentary on Pirkei Avot', category: 'parshanut', author: 'הרב שמואל גולדברג שליט"א', year: 2020, pages: 390, descHe: 'פירוש מקיף על מסכת אבות, עם עיון בדרכי המוסר ועצות לחיים.', descEn: 'A comprehensive commentary on Pirkei Avot, with insight into ethical paths and life advice.', tags: ['אבות', 'מוסר', 'פירוש'], downloads: 1560, featured: false, cover: '✡️', file: '#' },
  { id: 5, titleHe: 'הלכות ימים טובים', titleEn: 'Laws of the Holidays', category: 'halacha', author: 'הרב יצחק לוי שליט"א', year: 2023, pages: 512, descHe: 'ספר הלכה מקיף העוסק בדיני כל ימים טובים לאורך השנה, מהמקורות ועד למעשה.', descEn: 'A comprehensive halacha book covering the laws of all holidays throughout the year, from sources to practice.', tags: ['הלכה', 'ימים טובים', 'מועדים'], downloads: 2880, featured: true, cover: '🕯️', file: '#' },
  { id: 6, titleHe: 'נר לרגלי — עלון שבועי', titleEn: 'Ner Leragli — Weekly Bulletin', category: 'pamphlets', author: 'מכון תהלות ישראל', year: 2024, pages: 8, descHe: 'עלון שבועי הכולל דבר תורה על הפרשה, חידושים, לוח זמנים ועדכוני המכון.', descEn: 'A weekly bulletin including Torah thoughts on the portion, novellae, schedule and institute updates.', tags: ['עלון', 'שבועי', 'פרשה'], downloads: 8450, featured: true, cover: '📰', file: '#' },
  { id: 7, titleHe: 'דרך חיים — מוסר ומחשבה', titleEn: 'Derech Chaim — Mussar and Thought', category: 'machshava', author: 'הרב אברהם פרידמן שליט"א', year: 2019, pages: 285, descHe: 'ספר עיוני העוסק בנושאי מוסר ומחשבת ישראל, בשפה נגישה לכל אחד.', descEn: 'A theoretical book dealing with Mussar and Jewish thought topics, in a language accessible to everyone.', tags: ['מוסר', 'מחשבה', 'חיים'], downloads: 1230, featured: false, cover: '🌟', file: '#' },
  { id: 8, titleHe: 'קבלת שבת — מנהגים ומקורות', titleEn: 'Kabbalat Shabbat — Customs and Sources', category: 'moadim', author: 'הרב דוד רוזנברג שליט"א', year: 2022, pages: 178, descHe: 'עיון מקיף במנהגי קבלת שבת בעדות שונות, עם מקורות ההלכה ומשמעות כל מנהג.', descEn: 'A comprehensive study of Kabbalat Shabbat customs among different communities, with halachic sources and the meaning of each custom.', tags: ['שבת', 'מנהגים', 'קבלה'], downloads: 945, featured: false, cover: '🕎', file: '#' },
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
  if (!localStorage.getItem('ti_lessons'))  setData('lessons', []);
  if (!localStorage.getItem('ti_books'))    setData('books', []);
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
