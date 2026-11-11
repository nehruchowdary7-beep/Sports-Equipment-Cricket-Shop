let productFilterState = {
  sport: 'all',
  brand: 'all',
  search: '',
  sort: 'featured',
  maxPrice: 600
};

function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('products-matched-count');
  if (!grid || typeof SPORTX_DATA === 'undefined') return;

  const cataloguePool = SPORTX_DATA.products.filter(item => item.id !== 'vault-6' && item.id !== 'vault-1');

  let filtered = cataloguePool.filter(item => {
    if (productFilterState.sport !== 'all' && item.sport !== productFilterState.sport) {
      return false;
    }
    if (productFilterState.brand !== 'all' && item.brand.toLowerCase() !== productFilterState.brand.toLowerCase()) {
      return false;
    }
    if (item.price > productFilterState.maxPrice) {
      return false;
    }
    if (productFilterState.search) {
      const q = productFilterState.search.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchBrand = item.brand.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchSport = item.sport.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchDesc && !matchSport) {
        return false;
      }
    }
    return true;
  });

  switch (productFilterState.sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'popular':
      filtered.sort((a, b) => (b.reviewsCount || 0) - (a.reviewsCount || 0));
      break;
    default:
      filtered.sort((a, b) => (b.isProChoice ? 1 : 0) - (a.isProChoice ? 1 : 0));
  }

  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${cataloguePool.length} Products`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">No Matching Pro Gear Found</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try resetting your sport, brand, or price filters to see more results.</p>
        <button onclick="resetProductFilters()" class="mt-4 px-4 py-2 bg-gradient-orange text-white rounded-lg text-xs font-bold shadow-md">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(createProductCardHTML).join('');
}

function syncProductFilterUI() {
  document.querySelectorAll('.filter-sport-btn').forEach(btn => {
    if (btn.dataset.sport === productFilterState.sport) {
      btn.className = 'filter-sport-btn active px-4 py-2 rounded-xl text-xs font-bold transition-all';
    } else {
      btn.className = 'filter-sport-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700';
    }
  });

  const brandSelect = document.getElementById('filter-brand-select');
  if (brandSelect) brandSelect.value = productFilterState.brand;

  const priceDisplay = document.getElementById('price-slider-value');
  const priceSlider = document.getElementById('price-slider');
  if (priceSlider) priceSlider.value = productFilterState.maxPrice;
  if (priceDisplay) priceDisplay.textContent = `$${productFilterState.maxPrice}`;
}

function filterBySport(sportName) {
  productFilterState.sport = sportName;
  syncProductFilterUI();
  renderProductsGrid();
}

function filterByBrand(brandName) {
  productFilterState.brand = brandName;
  syncProductFilterUI();
  renderProductsGrid();
}

function filterBySearch(query) {
  productFilterState.search = query;
  renderProductsGrid();
}

function filterByPrice(val) {
  productFilterState.maxPrice = parseInt(val, 10);
  const priceDisplay = document.getElementById('price-slider-value');
  if (priceDisplay) priceDisplay.textContent = `$${val}`;
  renderProductsGrid();
}

function filterBySort(sortVal) {
  productFilterState.sort = sortVal;
  renderProductsGrid();
}

function resetProductFilters() {
  productFilterState = {
    sport: 'all',
    brand: 'all',
    search: '',
    sort: 'featured',
    maxPrice: 600
  };
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';
  syncProductFilterUI();
  renderProductsGrid();
}

function refreshProductGridHearts() {
  renderProductsGrid();
}

const COVERFLOW_PRODUCTS = [
  {
    id: 'crick-1',
    name: 'MRF Genius Grand Edition Bat',
    sport: 'Cricket',
    badge: 'Grade 1+ Willow',
    price: '$549.99',
    rating: 4.9,
    image: 'products-sec3-card1.jpg',
    alt: 'MRF Genius Grand Edition English Willow Cricket Bat',
    link: 'products.html?sport=cricket'
  },
  {
    id: 'foot-1',
    name: 'Nike Zoom Mercurial Superfly FG',
    sport: 'Football',
    badge: 'Pro Elite Cleats',
    price: '$289.99',
    rating: 4.9,
    image: 'hero-football.jpg',
    alt: 'Nike Zoom Mercurial Superfly Elite Football Cleats',
    link: 'products.html?sport=football'
  },
  {
    id: 'golf-1',
    name: 'Tour Spec Precision Club & Iron',
    sport: 'Golf & Precision',
    badge: 'Laser Calibrated',
    price: '$349.99',
    rating: 4.8,
    image: 'products-sec3-card2.jpg',
    alt: 'Precision Golf Club and Tournament Balls',
    link: 'products.html?sport=fitness'
  },
  {
    id: 'bad-1',
    name: 'Yonex Astrox 100 ZZ Carbon Frame',
    sport: 'Badminton',
    badge: '30 LBS Electronic Strung',
    price: '$229.99',
    rating: 5.0,
    image: 'products-sec3-card3.jpg',
    alt: 'Yonex Astrox 100 ZZ Tournament Badminton Racket',
    link: 'products.html?sport=badminton'
  },
  {
    id: 'run-1',
    name: 'Pro Speed Carbon Track Spikes',
    sport: 'Athletics & Track',
    badge: 'Orthotic Tuned',
    price: '$199.99',
    rating: 4.7,
    image: 'products-sec3-card4.jpg',
    alt: 'Pro Athletic Running Shoes and Hydration Pack',
    link: 'products.html?sport=fitness'
  },
  {
    id: 'bb-1',
    name: 'Nike Championship Match Ball',
    sport: 'Basketball',
    badge: 'FIBA Tournament Spec',
    price: '$89.99',
    rating: 4.8,
    image: 'basketball-hoop.jpg',
    alt: 'Nike Championship Match Basketball and Pro Hoop',
    link: 'products.html?sport=fitness'
  },
  {
    id: 'crick-6',
    name: 'SG Club White Cricket Balls (6pk)',
    sport: 'Cricket',
    badge: 'Alum Tanned Leather',
    price: '$119.99',
    rating: 4.9,
    image: 'home2-cricket-balls.jpg',
    alt: 'SG Club Leather White Cricket Balls Box of 6',
    link: 'products.html?sport=cricket'
  }
];

function initProductCoverflow() {
  const container = document.getElementById('product-coverflow');
  const track = document.getElementById('coverflow-track');
  const prevBtn = document.getElementById('coverflow-prev-btn');
  const nextBtn = document.getElementById('coverflow-next-btn');
  const srEl = document.getElementById('coverflow-sr-live');

  if (!container || !track) return;

  const items = COVERFLOW_PRODUCTS;
  const total = items.length;
  let activeIndex = 0;
  let isPaused = false;
  let autoplayTimer = null;

  const DEFAULT_DEPTH = 130;
  const DEFAULT_ROTATION = 38;
  const DEFAULT_SCALE_STEP = 0.14;
  const MAX_VISIBLE_OFFSET = 2;
  const MIN_SCALE = 0.55;
  const AUTOPLAY_DELAY = 4000;

  track.innerHTML = items.map((item, i) => `
    <div class="coverflow-carousel-card bg-slate-900 border-slate-700/80 group cursor-pointer" data-index="${i}" role="group" aria-roledescription="slide" aria-label="${item.name}">
      <img src="${item.image}" alt="${item.alt}" class="w-full h-full object-cover object-center pointer-events-none select-none transition-transform duration-700 group-hover:scale-105" draggable="false">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none"></div>
      <div class="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
        <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-600/90 text-white shadow-md backdrop-blur-sm">
          ${item.badge}
        </span>
        <span class="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-slate-900/80 text-blue-400 border border-blue-500/30 backdrop-blur-sm">
          ${item.sport}
        </span>
      </div>
      <div class="absolute bottom-0 inset-x-0 p-3 pointer-events-none">
        <h4 class="font-heading font-black text-xs sm:text-sm text-white tracking-tight drop-shadow truncate mb-1">
          ${item.name}
        </h4>
        <div class="flex items-center justify-between pt-1 border-t border-slate-800/80">
          <span class="font-mono font-bold text-xs text-blue-400">${item.price}</span>
          <span class="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300">
            <svg class="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ${item.rating}
          </span>
        </div>
      </div>
    </div>
  `).join('');

  const cardEls = Array.from(track.querySelectorAll('.coverflow-carousel-card'));

  function updateLayout() {
    const isMobile = window.innerWidth < 640;
    const spacing = isMobile ? 120 : 175;

    cardEls.forEach((card, i) => {
      const offset = i - activeIndex;
      const isVisible = Math.abs(offset) <= MAX_VISIBLE_OFFSET;
      const isActive = offset === 0;

      if (!isVisible) {
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.transform = `translateX(${offset * spacing}px) scale(${MIN_SCALE}) translateZ(-400px)`;
        card.setAttribute('aria-hidden', 'true');
        return;
      }

      card.setAttribute('aria-hidden', (!isActive).toString());
      card.style.pointerEvents = 'auto';

      const rotateY = -offset * DEFAULT_ROTATION;
      const translateX = offset * spacing;
      const translateZ = -Math.abs(offset) * DEFAULT_DEPTH;
      const scale = Math.max(1 - Math.abs(offset) * DEFAULT_SCALE_STEP, MIN_SCALE);
      const opacity = isActive ? 1 : Math.max(0.35, 1 - Math.abs(offset) * 0.25);
      const zIndex = total - Math.abs(offset);

      card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.zIndex = zIndex.toString();
      card.style.opacity = opacity.toString();

      if (isActive) {
        card.classList.add('ring-2', 'ring-blue-500', 'border-blue-500');
        card.classList.remove('border-slate-700/80');
      } else {
        card.classList.remove('ring-2', 'ring-blue-500', 'border-blue-500');
        card.classList.add('border-slate-700/80');
      }
    });

    if (srEl) {
      srEl.textContent = `Slide ${activeIndex + 1} of ${total}: ${items[activeIndex].name}`;
    }
  }

  function goTo(next) {
    activeIndex = ((next % total) + total) % total;
    updateLayout();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(activeIndex + 1));

  cardEls.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (idx !== activeIndex) {
        e.preventDefault();
        goTo(idx);
      } else {
        const item = items[idx];
        if (typeof openProductQuickView === 'function') {
          openProductQuickView(item.id);
        } else if (item.link) {
          window.location.href = item.link;
        }
      }
    });
  });

  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(activeIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(activeIndex - 1);
    }
  });

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isPaused) {
        goTo(activeIndex + 1);
      }
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  container.addEventListener('mouseenter', () => { isPaused = true; });
  container.addEventListener('mouseleave', () => { isPaused = false; });
  container.addEventListener('focus', () => { isPaused = true; });
  container.addEventListener('blur', () => { isPaused = false; });
  document.addEventListener('visibilitychange', () => {
    isPaused = document.hidden;
  });

  let startX = 0;
  let startTime = 0;
  let isDragging = false;

  track.addEventListener('pointerdown', (e) => {
    startX = e.clientX;
    startTime = Date.now();
    isDragging = true;
    isPaused = true;
  });

  window.addEventListener('pointerup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    isPaused = false;
    const diffX = e.clientX - startX;
    const diffTime = Date.now() - startTime;
    const velocity = Math.abs(diffX) / (diffTime || 1);

    if (diffX < -50 || (diffX < -20 && velocity > 0.4)) {
      goTo(activeIndex + 1);
    } else if (diffX > 50 || (diffX > 20 && velocity > 0.4)) {
      goTo(activeIndex - 1);
    }
  });

  window.addEventListener('resize', updateLayout);

  updateLayout();
  startAutoplay();
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const sportParam = urlParams.get('sport');
  const brandParam = urlParams.get('brand');

  if (sportParam) productFilterState.sport = sportParam;
  if (brandParam) productFilterState.brand = brandParam;

  syncProductFilterUI();
  renderProductsGrid();
  initProductCoverflow();
});

