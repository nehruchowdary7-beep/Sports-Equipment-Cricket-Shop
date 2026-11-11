function initHome2Interactive() {

  const pingElement = document.querySelector('.animate-ping');
  if (pingElement) {

  }

  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function filterVaultGallery(category, btnElement) {
  const cards = document.querySelectorAll('.vault-specimen-card');
  const pills = document.querySelectorAll('.vault-filter-pill');

  pills.forEach(pill => pill.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  }

  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, 50);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px) scale(0.96)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 250);
    }
  });
}

const INK_SLIDES = [
  {
    image: 'carousel-cricket-arena.jpg',
    tag: 'Discipline 01 &bull; Cricket',
    title: 'Championship Cricket Arena & Willow Lab',
    caption: 'High-intensity floodlit stadium testing. Hand-pressed 2.0-ton hydraulic rollers, duckbill spine profiling for feather-light pick-up, and 15,000 automated stroke break-in.',
    link: 'products.html?sport=cricket',
    buttonText: 'Shop Cricket Gear'
  },
  {
    image: 'carousel-football-pro.jpg',
    tag: 'Discipline 02 &bull; Football',
    title: 'Champions League Aerodynamic Seam Tech',
    caption: 'Thermo-bonded 12-panel microsuede casing with zero water uptake. Knuckleball trajectories engineered for true flight in rain.',
    link: 'products.html?sport=football',
    buttonText: 'Shop Match Footballs'
  },
  {
    image: 'carousel-badminton-court.jpg',
    tag: 'Discipline 03 &bull; Badminton',
    title: 'AeroSpeed 420 Carbon Nanotube Frames',
    caption: 'Ultra-rigid 82-gram isometric tournament frames tested to 420+ km/h smash speed with precision head-heavy tournament balance.',
    link: 'products.html?sport=badminton',
    buttonText: 'Shop Badminton Rackets'
  },
  {
    image: 'carousel-athletics-track.jpg',
    tag: 'Discipline 04 &bull; Athletics & Lab',
    title: 'Olympic Track & Championship Calibrations',
    caption: 'Full-length carbon fiber propulsion chassis, competition-tolerance plates machined to 10 grams with precision athletic telemetry.',
    link: 'products.html?sport=strength',
    buttonText: 'Shop Pro Gear'
  }
];

function initInkBlotCarousel() {
  const root = document.getElementById('ink-blot-carousel');
  if (!root) return;

  const slides = INK_SLIDES;
  const n = slides.length;
  let currentIndex = 0;
  let isTransitioning = false;
  let isPaused = false;
  let seq = 0;
  const duration = 1800;
  const bleed = 80;

  slides.forEach(s => {
    if (s.image) {
      const img = new Image();
      img.src = s.image;
    }
  });

  const baseImg = root.querySelector('.ib-img');
  const countEl = root.querySelector('.ib-count');
  const textContainer = root.querySelector('.ib-text');
  const fillBar = root.querySelector('.ib-fill');
  const btnPrev = root.querySelector('.ib-btn-prev');
  const btnNext = root.querySelector('.ib-btn-next');

  function pad2(num) {
    return num < 10 ? '0' + num : String(num);
  }

  function wrap(i, total) {
    return total ? ((i % total) + total) % total : 0;
  }

  function defaultOrigin(dir, w, h, r) {
    return [w * (dir >= 0 ? 0.62 + r * 0.25 : 0.13 + r * 0.25), h * (0.3 + r * 0.4)];
  }

  function easeInOut(t) {
    const c = Math.min(1, Math.max(0, t));
    return c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2;
  }

  function reach(x, y, w, h) {
    return Math.hypot(Math.max(x, w - x), Math.max(y, h - y));
  }

  function drops(seed, count) {
    let s = (seed >>> 0) || 1;
    const r = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
    const out = [];
    for (let i = 0; i < count; i++) {
      const a = r() * Math.PI * 2;
      const d = 40 + r() * 140;
      out.push([Math.cos(a) * d, Math.sin(a) * d, 0.25 + r() * 0.4]);
    }
    return out;
  }

  function updateTextAndCounter(index) {
    const s = slides[index];
    if (countEl) {
      countEl.textContent = `${pad2(index + 1)} / ${pad2(n)}`;
    }
    if (textContainer) {
      textContainer.innerHTML = `
        <span class="ib-tag">${s.tag}</span>
        <span class="ib-line ib-title">
          <span>${s.title}</span>
        </span>
        <span class="ib-line ib-cap">
          <span>${s.caption}</span>
        </span>
        <a href="${s.link}" class="ib-action-btn">
          <span>${s.buttonText}</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      `;
    }
  }

  function restartProgress() {
    if (!fillBar) return;
    fillBar.classList.remove('running');
    void fillBar.offsetWidth;
    if (!isPaused && n > 1) {
      fillBar.classList.add('running');
    }
  }

  function go(dir, px, py) {
    if (isTransitioning || n < 2) return;
    isTransitioning = true;
    const w = root.clientWidth || 1200;
    const h = root.clientHeight || 560;
    seq += 1;
    const [dx, dy] = defaultOrigin(dir, w, h, (seq * 0.618) % 1);
    const originX = px ?? dx;
    const originY = py ?? dy;
    const toIndex = wrap(currentIndex + dir, n);
    const toSrc = slides[toIndex].image;

    const svgNS = 'http://www.w3.org/2000/svg';
    const xlinkNS = 'http://www.w3.org/1999/xlink';

    const maskId = 'inkM_' + Math.random().toString(36).substring(2, 9);
    const filterId = 'inkF_' + Math.random().toString(36).substring(2, 9);
    const parts = [[0, 0, 1]].concat(drops(Math.round(originX * 7 + originY * 13), 8));

    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'ib-in');
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');

    const defs = document.createElementNS(svgNS, 'defs');
    defs.innerHTML = `
      <filter id="${filterId}" x="-30%" y="-30%" width="160%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.014" numOctaves="3" seed="3" result="turb" />
        <feDisplacementMap in="SourceGraphic" in2="turb" scale="${bleed}" xChannelSelector="R" yChannelSelector="G" />
        <feGaussianBlur stdDeviation="1" />
      </filter>
      <mask id="${maskId}" maskUnits="userSpaceOnUse" x="0" y="0" width="${w}" height="${h}">
        <rect width="${w}" height="${h}" fill="black" />
        <g filter="url(#${filterId})">
          ${parts.map((p, idx) => `<circle id="${maskId}_c${idx}" cx="${originX + p[0]}" cy="${originY + p[1]}" r="0" fill="white" />`).join('')}
        </g>
      </mask>
    `;
    svg.appendChild(defs);

    const imageEl = document.createElementNS(svgNS, 'image');
    imageEl.setAttribute('href', toSrc);
    imageEl.setAttributeNS(xlinkNS, 'xlink:href', toSrc);
    imageEl.setAttribute('x', '0');
    imageEl.setAttribute('y', '0');
    imageEl.setAttribute('width', String(w));
    imageEl.setAttribute('height', String(h));
    imageEl.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    imageEl.setAttribute('mask', `url(#${maskId})`);
    svg.appendChild(imageEl);

    const fallbackBloom = document.createElement('div');
    fallbackBloom.className = 'ib-bloom-fallback';
    fallbackBloom.style.position = 'absolute';
    fallbackBloom.style.inset = '0';
    fallbackBloom.style.backgroundImage = `url('${toSrc}')`;
    fallbackBloom.style.backgroundSize = 'cover';
    fallbackBloom.style.backgroundPosition = 'center';
    fallbackBloom.style.pointerEvents = 'none';
    fallbackBloom.style.zIndex = '4';
    fallbackBloom.style.clipPath = `circle(0px at ${originX}px ${originY}px)`;
    fallbackBloom.style.webkitClipPath = `circle(0px at ${originX}px ${originY}px)`;

    root.appendChild(fallbackBloom);
    root.appendChild(svg);

    updateTextAndCounter(toIndex);

    const circleEls = parts.map((_, idx) => svg.querySelector(`#${maskId}_c${idx}`));
    const R = reach(originX, originY, w, h) * 1.35;
    const t0 = performance.now();

    function step(now) {
      const elapsed = now - t0;
      const t = Math.min(1, elapsed / duration);
      const e = easeInOut(t);
      const currentR = R * e;

      parts.forEach((p, idx) => {
        const c = circleEls[idx];
        if (c) {
          const radius = currentR * (idx ? p[2] * 1.6 : 1);
          c.setAttribute('r', String(radius));
        }
      });

      const clipRadius = Math.round(currentR);
      fallbackBloom.style.clipPath = `circle(${clipRadius}px at ${originX}px ${originY}px)`;
      fallbackBloom.style.webkitClipPath = `circle(${clipRadius}px at ${originX}px ${originY}px)`;

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        if (baseImg) {
          baseImg.src = toSrc;
        }
        currentIndex = toIndex;
        svg.remove();
        fallbackBloom.remove();
        isTransitioning = false;
        restartProgress();
      }
    }
    requestAnimationFrame(step);
  }

  const stopPropagation = (e) => e.stopPropagation();
  [btnPrev, btnNext].forEach(btn => {
    if (btn) {
      btn.addEventListener('pointerdown', stopPropagation);
      btn.addEventListener('pointerup', stopPropagation);
    }
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      go(-1);
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.stopPropagation();
      go(1);
    });
  }

  let downPos = null;
  root.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.ib-nav') || e.target.closest('.ib-action-btn')) return;
    downPos = { x: e.clientX, y: e.clientY };
  });

  root.addEventListener('pointerup', (e) => {
    if (!downPos) return;
    if (e.target.closest('.ib-nav') || e.target.closest('.ib-action-btn')) {
      downPos = null;
      return;
    }
    const dx = e.clientX - downPos.x;
    const dy = e.clientY - downPos.y;
    downPos = null;
    const rect = root.getBoundingClientRect();
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? 1 : -1);
    } else if (Math.abs(dx) < 8) {

      go(1, e.clientX - rect.left, e.clientY - rect.top);
    }
  });

  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
  });

  if (fillBar) {
    fillBar.addEventListener('animationend', () => {
      if (!isPaused) {
        go(1);
      }
    });
  }

  root.addEventListener('mouseenter', () => {
    isPaused = true;
    root.setAttribute('data-paused', '1');
  });
  root.addEventListener('mouseleave', () => {
    isPaused = false;
    root.removeAttribute('data-paused');
  });

  updateTextAndCounter(0);
  restartProgress();
}

document.addEventListener('DOMContentLoaded', () => {
  initHome2Interactive();
  initInkBlotCarousel();

  const vipForm = document.getElementById('vip-cta-form');
  if (vipForm) {
    vipForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('vip-cta-email');
      if (emailInput && emailInput.value) {
        alert('VIP Pass Activated for ' + emailInput.value + '! 15% discount applied to your bag.');
        emailInput.value = '';
      }
    });
  }
});
