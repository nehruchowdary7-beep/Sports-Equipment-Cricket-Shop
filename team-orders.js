function updateTeamCalculator() {
  const sportType = document.getElementById('calc-sport-type')?.value || 'cricket';
  const qtyInput = document.getElementById('calc-qty-input');
  const qtySlider = document.getElementById('calc-qty-slider');
  const qty = parseInt(qtySlider?.value || 30, 10);

  if (qtyInput) qtyInput.value = qty;

  const basePrices = {
    cricket: 48,
    football: 38,
    badminton: 32,
    fitness: 28
  };

  const basePrice = basePrices[sportType] || 40;

  const addPlayerNames = document.getElementById('calc-addon-names')?.checked || false;
  const addEmbroidery = document.getElementById('calc-addon-embroidery')?.checked || false;
  const addSocks = document.getElementById('calc-addon-socks')?.checked || false;

  let unitAddon = 0;
  if (addPlayerNames) unitAddon += 5;
  if (addEmbroidery) unitAddon += 4;
  if (addSocks) unitAddon += 6;

  const unitBeforeDiscount = basePrice + unitAddon;

  let discountTierPercent = 0;
  if (qty >= 100) {
    discountTierPercent = 35;
  } else if (qty >= 50) {
    discountTierPercent = 25;
  } else if (qty >= 25) {
    discountTierPercent = 15;
  } else if (qty >= 15) {
    discountTierPercent = 10;
  }

  const finalUnitPrice = Math.round(unitBeforeDiscount * (1 - discountTierPercent / 100));
  const estimatedTotal = finalUnitPrice * qty;
  const savings = (unitBeforeDiscount * qty) - estimatedTotal;

  const unitPriceEl = document.getElementById('calc-unit-price');
  const totalEl = document.getElementById('calc-total-price');
  const discountTierEl = document.getElementById('calc-discount-badge');
  const savingsEl = document.getElementById('calc-savings-amount');

  if (unitPriceEl) unitPriceEl.textContent = `$${finalUnitPrice} / kit`;
  if (totalEl) totalEl.textContent = `$${estimatedTotal.toLocaleString()}`;
  if (savingsEl) savingsEl.textContent = `Save $${savings.toLocaleString()} with team discount!`;
  if (discountTierEl) {
    discountTierEl.textContent = `${discountTierPercent}% TIER DISCOUNT APPLIED`;
  }
}

function syncCalcSliderFromInput(val) {
  const slider = document.getElementById('calc-qty-slider');
  if (slider) {
    slider.value = Math.max(15, Math.min(500, parseInt(val, 10) || 15));
    updateTeamCalculator();
  }
}

function handleTeamFormSubmit(e) {
  e.preventDefault();
  const teamName = document.getElementById('team-order-name')?.value || 'Your Team';
  if (typeof showToast === 'function') {
    showToast(`Team Quote Request sent for "${teamName}"! Our custom kit director will email you within 2 hours.`, 'success');
  }
  e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {
  updateTeamCalculator();
});

const LAYOUT_GRID_DATA = {
  1: {
    id: 1,
    title: 'Premier Football Academy Squad Kit',
    tag: 'Discipline 01 • Football Roster',
    stat: 'From $38 / Kit • 11-Day Dispatch • Min 15 Sets',
    img: 'carousel-football-pro.jpg',
    desc: 'Dual home & away breathable microfiber jerseys with heat-fused 3D silicone crests, custom squad numbers, and FIFA-spec match balls. Engineered for elite academy performance with anti-cling moisture evaporation.',
    spec1: 'Sublimated moisture-wicking poly-mesh (180 GSM)',
    spec2: '11-Day Express Air Dispatch Guarantee',
    sport: 'football',
    qty: 25
  },
  2: {
    id: 2,
    title: 'Championship Cricket Whites',
    tag: 'Discipline 02 • Two-Day & White-Ball Roster',
    stat: '$48 / Kit • 14-Day Delivery • Min 15 Sets',
    img: 'team-order-cricket-kit.jpg',
    desc: 'Tournament-grade match equipment bundle: custom embroidered club jerseys, cream trousers, SS English willow bats, wicketkeeper gear, and alum leather match balls.',
    spec1: 'Stretch knit poly-cotton blend (220 GSM)',
    spec2: '14-Day Priority Tracked Dispatch',
    sport: 'cricket',
    qty: 30
  },
  3: {
    id: 3,
    title: 'Collegiate Badminton & Sublimated Polos',
    tag: 'Discipline 03 • Sublimated Teamwear Polos',
    stat: '$32 / Kit • 9-Day Delivery • Min 15 Sets',
    img: 'team-order-polo-jersey.jpg',
    desc: 'Ultra-lightweight quick-dry sublimated raglan polos engineered with custom geometric gradient patterns, breathable micro-mesh, anti-static finish, and matched kit duffels.',
    spec1: 'AeroDry feather-lite micro-mesh (140 GSM)',
    spec2: '9-Day Express Turnaround',
    sport: 'badminton',
    qty: 22
  },
  4: {
    id: 4,
    title: 'Track & Field Speed Singlets',
    tag: 'Discipline 04 • Athletics & Track Squad',
    stat: 'From $28 / Kit • Wind-Tunnel Tested • Min 15 Sets',
    img: 'team-order-track-sprint.jpg',
    desc: 'Zero-drag aerodynamic singlets with laser-cut ventilation channels, thermal squad warm-up jackets, and bulk hydration squad packs. Trusted by collegiate track teams across the nation.',
    spec1: 'Laser-perforated spandex blend (120 GSM)',
    spec2: '10-Day Speed Dispatch',
    sport: 'fitness',
    qty: 35
  }
};

let currentModalCardId = null;

function openLayoutGridModal(cardId) {
  const card = LAYOUT_GRID_DATA[cardId];
  if (!card) return;
  currentModalCardId = cardId;

  const modal = document.getElementById('layout-grid-modal');
  const backdrop = document.getElementById('layout-grid-backdrop');
  const dialog = document.getElementById('layout-grid-dialog');
  const img = document.getElementById('layout-grid-modal-img');
  const tag = document.getElementById('layout-grid-modal-tag');
  const title = document.getElementById('layout-grid-modal-title');
  const stat = document.getElementById('layout-grid-modal-stat');
  const desc = document.getElementById('layout-grid-modal-desc');
  const spec1 = document.getElementById('layout-grid-modal-spec1');
  const spec2 = document.getElementById('layout-grid-modal-spec2');
  const calcBtn = document.getElementById('layout-grid-calc-btn');

  if (img) img.src = card.img;
  if (tag) tag.textContent = card.tag;
  if (title) title.textContent = card.title;
  if (stat) stat.textContent = card.stat;
  if (desc) desc.textContent = card.desc;
  if (spec1) spec1.textContent = card.spec1;
  if (spec2) spec2.textContent = card.spec2;

  if (calcBtn) {
    calcBtn.onclick = () => {
      closeLayoutGridModal();
      const calcSelect = document.getElementById('calc-sport-type');
      const calcSlider = document.getElementById('calc-qty-slider');
      const calcSection = document.getElementById('team-calculator-section');

      if (calcSelect) calcSelect.value = card.sport;
      if (calcSlider) calcSlider.value = card.qty;
      updateTeamCalculator();

      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
  }

  if (modal && backdrop && dialog) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    requestAnimationFrame(() => {
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
      dialog.classList.remove('scale-95', 'opacity-0');
      dialog.classList.add('scale-100', 'opacity-100');
    });
  }
}

function closeLayoutGridModal() {
  const modal = document.getElementById('layout-grid-modal');
  const backdrop = document.getElementById('layout-grid-backdrop');
  const dialog = document.getElementById('layout-grid-dialog');

  if (modal && backdrop && dialog) {
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0');
    dialog.classList.remove('scale-100', 'opacity-100');
    dialog.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      currentModalCardId = null;
    }, 250);
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLayoutGridModal();
  }
});
