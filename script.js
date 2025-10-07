(() => {
  const el = document.getElementById("name");
  const tagline = document.getElementById("tagline");

  tagline.textContent =
    "The name's Kushagra Suryawanshi. Hold fast, mate — tide's turning. Give it a breath and I'll make port.";

  // Your multilingual name list
  const names = [
    "Kushagra Suryawanshi",           // English (Latin)
    "कुशाग्र सूर्यवंशी",              // Hindi / Sanskrit (Devanagari)
    "Кушагра Сурьяванши",             // Russian / Cyrillic
    "クシャグラ・スリャワンシ",        // Japanese (Katakana)
    "Κουσάγκρα Σουριγιαβάνσι",          // Greek
    "쿠샤그라 수르야완시",              // Korean (Hangul)
    "คุศัครา สุริยวันชี",              // Thai
    "គុសាហ្គ្រា ស៊ូរីយវាន់ស៊ី",         // Khmer
    "ကူရှာဂ္ရာ ဆူရယဝန်ရှီ",           // Burmese
    "كوشاغرا سوريافانشي",             // Arabic
  ];

  // Regex script detection
  const ranges = {
    devanagari: /[\u0900-\u097F]/,
    arabic: /[\u0600-\u06FF]/,
    cyrillic: /[\u0400-\u04FF]/,
    greek: /[\u0370-\u03FF]/,
    japanese: /[\u3040-\u30FF\u31F0-\u31FF]/, // Hiragana/Katakana
    korean: /[\uAC00-\uD7AF]/,
    thai: /[\u0E00-\u0E7F]/,
    khmer: /[\u1780-\u17FF]/,
    burmese: /[\u1000-\u109F]/,
  };

  const stacks = {
    latin: '"Grenze Gotisch", Georgia, "Times New Roman", serif',
    devanagari:
      '"Nirmala UI", "Kohinoor Devanagari", "Mangal", "Devanagari Sangam MN", serif',
    arabic: '"Amiri", "Scheherazade New", "Dubai", sans-serif',
    cyrillic: '"Segoe UI", "Arial", "Times New Roman", serif',
    greek: 'Georgia, "Times New Roman", serif',
    japanese:
      '"Yu Gothic", "Hiragino Kaku Gothic ProN", "Meiryo", "MS PGothic", sans-serif',
    korean: '"Malgun Gothic", "Apple SD Gothic Neo", sans-serif',
    thai: '"Noto Sans Thai", "Leelawadee UI", sans-serif',
    khmer: '"Noto Sans Khmer", "Khmer OS", sans-serif',
    burmese: '"Noto Sans Myanmar", "Myanmar Text", sans-serif',
  };

  function detectScript(text) {
    for (const [key, regex] of Object.entries(ranges)) {
      if (regex.test(text)) return key;
    }
    return "latin";
  }

  function applyStackFor(text) {
    const script = detectScript(text);
    el.style.fontFamily = stacks[script] || stacks.latin;
    el.style.letterSpacing = script === "latin" ? ".05em" : ".02em";
    el.style.fontWeight = script === "latin" ? 800 : 700;
  }

  const SPEED = 1000; // ms
  let i = 0;

  function render(idx) {
    const text = names[idx];
    applyStackFor(text);
    el.classList.remove("swap");
    void el.offsetWidth;
    el.textContent = text;
    el.classList.add("swap");
  }

  render(0);
  setInterval(() => {
    i = (i + 1) % names.length;
    render(i);
  }, SPEED);
})();
