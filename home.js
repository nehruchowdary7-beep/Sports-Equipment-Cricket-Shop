const QUIZ_PREVIEWS = {
  cricket: {
    img: 'hero-cricket-bat.jpg',
    title: 'SportX Invictus Pro Grade 1+ English Willow',
    spec1: 'Sweet Spot: Mid-to-Low Drive Zone',
    spec2: 'Robotic Knocking: 15,000 Precision Strikes',
    spec3: 'Weight: 2 lb 8 oz \u2022 Test Match Ready'
  },
  football: {
    img: 'hero-football.jpg',
    title: 'SportX Velocity 90 Pro Thermal Match Football',
    spec1: 'Seam: Aerodynamic Micro-Grooves',
    spec2: 'Panels: 32 Thermally Bonded Panels',
    spec3: 'Standard: FIFA Quality Pro Certified'
  },
  badminton: {
    img: 'home2-badminton-racket.jpg',
    title: 'SportX Carbon Vortex 100Z Tour Racket',
    spec1: 'Tension: 32 Lbs Max High Tension',
    spec2: 'Material: Toray M40J Japanese Carbon',
    spec3: 'Balance Point: 305mm Head-Heavy Smash'
  },
  fitness: {
    img: 'home2-sec3-card4.jpg',
    title: 'SportX Olympic Mach-1 Urethane Bumper Set',
    spec1: 'Calibration: \u00B110 Grams Competition Tol.',
    spec2: 'Material: Virgin Solid Urethane Core',
    spec3: 'Standard: IWF Certified 50.4mm Hub'
  }
};

function selectQuizSport(sport) {
  const sportSelect = document.getElementById('quiz-sport');
  if (sportSelect) sportSelect.value = sport;

  document.querySelectorAll('.quiz-sport-btn').forEach(btn => {
    const isSelected = btn.getAttribute('data-sport') === sport;
    if (isSelected) {
      btn.className = 'quiz-sport-btn px-4 py-3 rounded-xl border border-blue-500 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer';
    } else {
      btn.className = 'quiz-sport-btn px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-800/80 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer';
    }
  });

  const preview = QUIZ_PREVIEWS[sport] || QUIZ_PREVIEWS.cricket;
  const imgEl = document.getElementById('quiz-preview-img');
  const titleEl = document.getElementById('quiz-preview-title');
  const spec1El = document.getElementById('quiz-preview-spec1');
  const spec2El = document.getElementById('quiz-preview-spec2');
  const spec3El = document.getElementById('quiz-preview-spec3');

  if (imgEl) imgEl.src = preview.img;
  if (titleEl) titleEl.textContent = preview.title;
  if (spec1El) spec1El.textContent = preview.spec1;
  if (spec2El) spec2El.textContent = preview.spec2;
  if (spec3El) spec3El.textContent = preview.spec3;
}

function selectQuizLevel(level) {
  const levelSelect = document.getElementById('quiz-level');
  if (levelSelect) levelSelect.value = level;

  document.querySelectorAll('.quiz-level-btn').forEach(btn => {
    const isSelected = btn.getAttribute('data-level') === level;
    if (isSelected) {
      btn.className = 'quiz-level-btn px-4 py-2.5 rounded-xl border border-blue-500 bg-blue-500/15 dark:bg-blue-500/25 hover:bg-blue-500/25 dark:hover:bg-blue-500/35 text-blue-600 dark:text-blue-400 font-bold text-xs text-left hover:-translate-y-0.5 transition-all duration-200 cursor-pointer';
      const label = btn.querySelector('span:first-child');
      if (label) label.className = 'block font-black uppercase tracking-wide text-blue-600 dark:text-blue-400';
    } else {
      btn.className = 'quiz-level-btn px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/60 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-500 text-slate-500 dark:text-slate-400 font-bold text-xs text-left hover:-translate-y-0.5 transition-all duration-200 cursor-pointer';
      const label = btn.querySelector('span:first-child');
      if (label) label.className = 'block font-black uppercase tracking-wide text-slate-800 dark:text-slate-200';
    }
  });
}

function renderHomeHighlights() {
  const container = document.getElementById('home-featured-grid');
  if (!container || typeof SPORTX_DATA === 'undefined') return;

  const cricket = SPORTX_DATA.products.filter(p => p.sport === 'cricket').slice(0, 2);
  const football = SPORTX_DATA.products.filter(p => p.sport === 'football').slice(0, 2);
  const badminton = SPORTX_DATA.products.filter(p => p.sport === 'badminton').slice(0, 2);
  const fitness = SPORTX_DATA.products.filter(p => p.sport === 'fitness').slice(0, 2);

  const featured = [...cricket, ...football, ...badminton, ...fitness];
  container.innerHTML = featured.map(createProductCardHTML).join('');
}

function runGearQuiz() {
  const sport = document.getElementById('quiz-sport')?.value;
  const level = document.getElementById('quiz-level')?.value;
  const resultCard = document.getElementById('quiz-result');
  const resultText = document.getElementById('quiz-result-text');
  const resultBtn = document.getElementById('quiz-result-btn');

  if (!resultCard || !resultText || !resultBtn || typeof SPORTX_DATA === 'undefined') return;

  const matches = SPORTX_DATA.products.filter(p => p.sport === sport);
  let recommended = matches[0];
  if (level === 'pro' && matches.find(p => p.isProChoice)) {
    recommended = matches.find(p => p.isProChoice);
  }

  resultText.innerHTML = `
    Based on your <span class="font-bold text-blue-600 dark:text-blue-400 capitalize">${level}</span> competition level in <span class="font-bold text-blue-600 dark:text-blue-400 capitalize">${sport}</span>, we recommend the
    <span class="font-bold text-slate-900 dark:text-white">${recommended.name}</span>!
  `;
  resultBtn.onclick = () => {
    openQuickView(recommended.id);
  };
  resultCard.classList.remove('hidden');
}


function animateHeroCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters || counters.length === 0) return;

  const duration = 1800;
  let startTime = null;

  function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  }

  function updateCounters(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeOutExpo(progress);

    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target')) || 0;
      const suffix = counter.getAttribute('data-suffix') || '';
      const decimals = parseInt(counter.getAttribute('data-decimals') || '0', 10);
      const current = progress >= 1 ? target : (target * ease);

      let formattedNumber;
      if (decimals > 0) {
        formattedNumber = current.toFixed(decimals);
      } else {
        formattedNumber = Math.round(current);
      }

      if (counter.getAttribute('data-has-star') === 'true') {
        counter.innerHTML = formattedNumber + ' <svg class="w-4 h-4 fill-blue-500 inline -mt-1" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
      } else {
        counter.textContent = formattedNumber + suffix;
      }
    });

    if (progress < 1) {
      requestAnimationFrame(updateCounters);
    }
  }

  requestAnimationFrame(updateCounters);
}

document.addEventListener('DOMContentLoaded', () => {
  animateHeroCounters();
  renderHomeHighlights();
});
