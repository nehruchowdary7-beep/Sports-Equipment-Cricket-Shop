let commonState = {
  cart: [],
  wishlist: [],
  theme: 'light',
  direction: 'ltr',
  appliedPromo: null,
  modalProduct: null
};

function initCommon() {
  try {
    const savedTheme = localStorage.getItem('sportx_theme') || 'light';
    commonState.theme = savedTheme;
    applyTheme(commonState.theme);

    const savedDir = localStorage.getItem('sportx_dir') || 'ltr';
    applyDirection(savedDir);

    const savedCart = localStorage.getItem('sportx_cart');
    if (savedCart) commonState.cart = JSON.parse(savedCart);

    const savedWish = localStorage.getItem('sportx_wishlist');
    if (savedWish) commonState.wishlist = JSON.parse(savedWish);
  } catch (e) {
    console.warn('Storage init failed:', e);
  }

  updateCartBadges();
  updateWishlistBadges();
  renderCartDrawer();
}

function applyDirection(dir) {
  document.documentElement.setAttribute('dir', dir);
  commonState.direction = dir;
  localStorage.setItem('sportx_dir', dir);
  const dirLabel = document.getElementById('dir-toggle-label');
  if (dirLabel) {
    dirLabel.textContent = '';
  }
}

function toggleDirection() {
  const nextDir = commonState.direction === 'rtl' ? 'ltr' : 'rtl';
  applyDirection(nextDir);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const themeIcon = document.getElementById('theme-toggle-icon');
  const themeLabel = document.getElementById('theme-toggle-label');

  if (theme === 'dark') {
    html.classList.add('dark');
    if (themeIcon) {
      themeIcon.innerHTML = `<svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>`;
    }
    if (themeLabel) themeLabel.textContent = '';
  } else {
    html.classList.remove('dark');
    if (themeIcon) {
      themeIcon.innerHTML = `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>`;
    }
    if (themeLabel) themeLabel.textContent = '';
  }

  localStorage.setItem('sportx_theme', theme);
  commonState.theme = theme;
}

function toggleTheme() {
  const nextTheme = commonState.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
}

function showToast(message, type = 'success') {
  return;
}

function addToCart(productId, size = null, qty = 1) {
  if (typeof SPORTX_DATA === 'undefined') return;

  let product = SPORTX_DATA.products.find(p => p.id === productId || String(p.id) === String(productId));
  if (!product && (typeof productId === 'number' || !isNaN(productId))) {
    const num = parseInt(productId, 10);
    const vaultId = `vault-${num}`;
    product = SPORTX_DATA.products.find(p => p.id === vaultId);
  }
  if (!product) return;

  const selectedSize = size || (product.sizes && product.sizes[0]) || 'Standard';

  const existingIndex = commonState.cart.findIndex(
    item => item.id === productId && item.selectedSize === selectedSize
  );

  if (existingIndex > -1) {
    commonState.cart[existingIndex].qty += qty;
  } else {
    commonState.cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      sport: product.sport,
      brand: product.brand,
      image: product.image,
      selectedSize: selectedSize,
      qty: qty
    });
  }

  saveCart();
  openCartDrawer();
}

function removeFromCart(index) {
  if (index >= 0 && index < commonState.cart.length) {
    const item = commonState.cart[index];
    commonState.cart.splice(index, 1);
    saveCart();
  }
}

function updateCartQty(index, change) {
  if (index >= 0 && index < commonState.cart.length) {
    commonState.cart[index].qty += change;
    if (commonState.cart[index].qty <= 0) {
      removeFromCart(index);
    } else {
      saveCart();
    }
  }
}

function saveCart() {
  try {
    localStorage.setItem('sportx_cart', JSON.stringify(commonState.cart));
  } catch (e) {}
  updateCartBadges();
  renderCartDrawer();
}

function updateCartBadges() {
  const totalCount = commonState.cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(badge => {
    badge.textContent = totalCount;
    if (totalCount > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const totalEl = document.getElementById('cart-total');
  const freeShipBar = document.getElementById('free-shipping-progress');
  const freeShipText = document.getElementById('free-shipping-text');
  const emptyState = document.getElementById('cart-empty-state');
  const filledState = document.getElementById('cart-filled-state');

  if (!container) return;

  if (commonState.cart.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (filledState) filledState.classList.add('hidden');
    if (subtotalEl) subtotalEl.textContent = '$0';
    if (discountEl) discountEl.textContent = '$0';
    if (totalEl) totalEl.textContent = '$0';
    if (freeShipBar) freeShipBar.style.width = '0%';
    if (freeShipText) freeShipText.innerHTML = 'Add <span class="font-bold text-blue-500">$150</span> more for <span class="font-bold">FREE Express Delivery</span>';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (filledState) filledState.classList.remove('hidden');

  let subtotal = 0;
  container.innerHTML = commonState.cart.map((item, idx) => {
    const lineTotal = item.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="flex gap-4 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm transition-all hover:border-blue-500/40">
        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg flex-shrink-0 bg-slate-100 dark:bg-slate-800">
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-2">
              <h4 class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${item.brand} • ${item.sport}</h4>
              <button type="button" onclick="removeFromCart(${idx})" class="w-7 h-7 rounded-lg bg-slate-100 hover:bg-red-50 dark:bg-slate-800 dark:hover:bg-red-950/40 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all duration-200 cursor-pointer border border-transparent hover:border-red-500/30" title="Remove item">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <h3 class="text-sm font-semibold truncate text-slate-900 dark:text-white mt-0.5">${item.name}</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400">Spec / Size: <span class="font-medium text-slate-700 dark:text-slate-300">${item.selectedSize}</span></p>
          </div>
          <div class="flex items-center justify-between mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
            <div class="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 text-xs">
              <button onclick="updateCartQty(${idx}, -1)" class="px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-colors">-</button>
              <span class="px-2.5 font-bold text-slate-800 dark:text-slate-100">${item.qty}</span>
              <button onclick="updateCartQty(${idx}, 1)" class="px-2.5 py-1 text-slate-600 dark:text-slate-300 hover:bg-blue-500 hover:text-white transition-colors">+</button>
            </div>
            <span class="text-sm font-bold text-blue-600 dark:text-blue-400">$${lineTotal}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  let discount = 0;
  if (commonState.appliedPromo) {
    discount = Math.round(subtotal * (commonState.appliedPromo.percent / 100));
  }

  const finalTotal = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.textContent = `$${subtotal}`;
  if (discountEl) discountEl.textContent = discount > 0 ? `-$${discount}` : '$0';
  if (totalEl) totalEl.textContent = `$${finalTotal}`;

  const freeThreshold = 150;
  const progressPercent = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  if (freeShipBar) freeShipBar.style.width = `${progressPercent}%`;

  if (freeShipText) {
    if (subtotal >= freeThreshold) {
      freeShipText.innerHTML = `<span class="inline-flex items-center gap-1.5"><svg class="w-4 h-4 text-blue-500 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="font-bold text-blue-500">You unlocked FREE Express Shipping!</span></span>`;
    } else {
      const remaining = freeThreshold - subtotal;
      freeShipText.innerHTML = `Add <span class="font-bold text-blue-500">$${remaining}</span> more for <span class="font-bold">FREE Express Delivery</span>`;
    }
  }
}

function openCartDrawer() {
  renderCartDrawer();
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.add('open');
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  if (drawer) drawer.classList.remove('open');
}

function applyPromoCode() {
  const input = document.getElementById('promo-code-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) return;

  if (code === 'SPORTX10') {
    commonState.appliedPromo = { code: 'SPORTX10', percent: 10 };
    showToast('Applied coupon SPORTX10: 10% Discount!');
    renderCartDrawer();
  } else if (code === 'CHAMPION' || code === 'PRO20') {
    commonState.appliedPromo = { code: code, percent: 15 };
    showToast('Elite Pro Code Applied: 15% OFF your bag!');
    renderCartDrawer();
  } else {
    showToast('Invalid promo code. Try "SPORTX10"', 'info');
  }
}

function toggleWishlist(productId) {
  const idx = commonState.wishlist.indexOf(productId);
  const product = (typeof SPORTX_DATA !== 'undefined') ? SPORTX_DATA.products.find(p => p.id === productId) : null;

  if (idx > -1) {
    commonState.wishlist.splice(idx, 1);
    showToast('Removed from your wishlist.', 'info');
  } else {
    commonState.wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Item'}" to wishlist!`);
  }

  saveWishlist();
  if (typeof refreshProductGridHearts === 'function') refreshProductGridHearts();
  renderWishlistModal();
}

function saveWishlist() {
  try {
    localStorage.setItem('sportx_wishlist', JSON.stringify(commonState.wishlist));
  } catch (e) {}
  updateWishlistBadges();
}

function updateWishlistBadges() {
  const count = commonState.wishlist.length;
  const badges = document.querySelectorAll('.wishlist-count-badge');
  badges.forEach(badge => {
    badge.textContent = count;
    if (count > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });
}

function openWishlistModal() {
  renderWishlistModal();
  const modal = document.getElementById('wishlist-modal');
  if (modal) modal.classList.add('open');
}

function closeWishlistModal() {
  const modal = document.getElementById('wishlist-modal');
  if (modal) modal.classList.remove('open');
}

function renderWishlistModal() {
  const listContainer = document.getElementById('wishlist-items-container');
  if (!listContainer || typeof SPORTX_DATA === 'undefined') return;

  if (commonState.wishlist.length === 0) {
    listContainer.innerHTML = `
      <div class="text-center py-12">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </div>
        <h4 class="text-base font-bold text-slate-800 dark:text-slate-100">Your Wishlist is Empty</h4>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">Click the heart icon on any bat, racket, or cleats to save them for later.</p>
        <a href="products.html" class="inline-block mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold shadow-md shadow-blue-500/25 transition-all">Browse Pro Gear</a>
      </div>
    `;
    return;
  }

  const items = commonState.wishlist
    .map(id => SPORTX_DATA.products.find(p => p.id === id))
    .filter(Boolean);

  listContainer.innerHTML = items.map(product => `
    <div class="flex items-center justify-between p-3.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-900/40">
      <div class="flex items-center gap-3.5 min-w-0">
        <img src="${product.image}" alt="${product.name}" class="w-14 h-14 object-cover rounded-lg bg-slate-200 dark:bg-slate-800 flex-shrink-0">
        <div class="min-w-0">
          <span class="text-[10px] font-bold uppercase tracking-wider text-blue-500">${product.sport}</span>
          <h4 class="text-sm font-bold truncate text-slate-900 dark:text-white">${product.name}</h4>
          <span class="text-sm font-extrabold text-blue-600 dark:text-blue-400">$${product.price}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="addToCart('${product.id}'); toggleWishlist('${product.id}');" class="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md hover:shadow-blue-500/30 transition-all">Add to Cart</button>
        <button onclick="toggleWishlist('${product.id}')" class="p-2 text-slate-400 hover:text-blue-500 transition-colors" title="Remove">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

function openQuickView(productId) {
  if (typeof SPORTX_DATA === 'undefined') return;
  const product = SPORTX_DATA.products.find(p => p.id === productId);
  if (!product) return;

  commonState.modalProduct = product;
  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  document.getElementById('qv-sport').textContent = product.sport.toUpperCase();
  document.getElementById('qv-brand').textContent = product.brand;
  document.getElementById('qv-title').textContent = product.name;
  document.getElementById('qv-price').textContent = `$${product.price}`;
  document.getElementById('qv-original-price').textContent = `$${product.originalPrice}`;
  document.getElementById('qv-description').textContent = product.description;
  document.getElementById('qv-image').src = product.image;
  document.getElementById('qv-rating').textContent = `${product.rating} / 5.0`;
  document.getElementById('qv-reviews-count').textContent = `(${product.reviewsCount} verified athlete reviews)`;

  const specsContainer = document.getElementById('qv-specs-container');
  if (specsContainer && product.specs) {
    specsContainer.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <div class="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800 text-xs">
        <span class="text-slate-500 dark:text-slate-400 font-medium">${key}</span>
        <span class="text-slate-900 dark:text-slate-200 font-bold">${val}</span>
      </div>
    `).join('');
  }

  const sizesContainer = document.getElementById('qv-sizes-container');
  if (sizesContainer) {
    sizesContainer.innerHTML = (product.sizes || ['Standard']).map((size, idx) => `
      <label class="cursor-pointer">
        <input type="radio" name="qv-size" value="${size}" class="hidden peer" ${idx === 0 ? 'checked' : ''}>
        <span class="inline-block px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:text-blue-500 text-slate-700 dark:text-slate-300 transition-all">
          ${size}
        </span>
      </label>
    `).join('');
  }

  modal.classList.add('open');
}

function closeQuickView() {
  const modal = document.getElementById('quick-view-modal');
  if (modal) modal.classList.remove('open');
}

function addCurrentModalToCart() {
  if (!commonState.modalProduct) return;
  const selectedSizeEl = document.querySelector('input[name="qv-size"]:checked');
  const size = selectedSizeEl ? selectedSizeEl.value : null;
  addToCart(commonState.modalProduct.id, size);
  closeQuickView();
}

function openCheckoutModal() {
  if (commonState.cart.length === 0) {
    showToast('Your gear bag is empty!', 'info');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkout-modal');
  if (modal) {
    const totalEl = document.getElementById('checkout-modal-total');
    let subtotal = commonState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    if (commonState.appliedPromo) {
      subtotal -= Math.round(subtotal * (commonState.appliedPromo.percent / 100));
    }
    if (totalEl) totalEl.textContent = `$${subtotal}`;
    modal.classList.add('open');
  }
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
}

function completeCheckoutSimulation(e) {
  e.preventDefault();
  closeCheckoutModal();
  commonState.cart = [];
  saveCart();
  showToast('Order Placed Successfully! Tracking details dispatched to your email.', 'success');
}

function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.remove('hidden');
}
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.add('hidden');
}

function createProductCardHTML(p) {
  const isWish = commonState.wishlist.includes(p.id);
  const discountPercent = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

  return `
    <div class="product-card group relative flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#1E1E26] p-4 shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect">

      <div class="relative product-img-wrapper rounded-xl bg-slate-100 dark:bg-slate-900/80 h-56 flex items-center justify-center p-3">
        <img src="${p.image}" alt="${p.name}" class="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500">

        <div class="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          ${p.badge ? `<span class="px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide rounded-md bg-blue-600 text-white shadow-sm">${p.badge}</span>` : ''}
          ${discountPercent > 0 ? `<span class="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-900/80 dark:bg-black/80 text-blue-400 backdrop-blur-md">-${discountPercent}%</span>` : ''}
        </div>

        <button onclick="toggleWishlist('${p.id}')" aria-label="Save to Wishlist" class="absolute top-3 right-3 p-2.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-400 hover:text-blue-500 shadow-md backdrop-blur-sm transition-all transform hover:scale-110">
          <svg class="w-4 h-4 ${isWish ? 'fill-red-500 text-blue-500' : 'fill-none'}" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        <div class="absolute inset-x-4 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          <button onclick="openQuickView('${p.id}')" class="flex-1 py-2 rounded-lg bg-slate-900/90 dark:bg-slate-800/95 text-white text-xs font-bold backdrop-blur-md hover:bg-blue-600 transition-colors shadow-lg flex items-center justify-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick Specs
          </button>
        </div>
      </div>

      <div class="pt-4 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span class="font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">${p.sport} • ${p.brand}</span>
            <div class="flex items-center gap-1 font-semibold text-blue-500">
              <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span>${p.rating}</span>
            </div>
          </div>

          <h3 class="font-heading text-base font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-blue-500 transition-colors" title="${p.name}">
            ${p.name}
          </h3>

          <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            ${p.description}
          </p>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
          <div>
            <div class="flex items-baseline gap-2">
              <span class="text-lg font-extrabold text-slate-900 dark:text-white">$${p.price}</span>
              ${p.originalPrice > p.price ? `<span class="text-xs text-slate-400 line-through">$${p.originalPrice}</span>` : ''}
            </div>
            <span class="text-[10px] text-blue-500 dark:text-blue-400 font-semibold">● Ready to Dispatch</span>
          </div>

          <button onclick="addToCart('${p.id}')" class="px-3.5 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white text-xs font-bold transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-1.5 group/btn cursor-pointer">
            <svg class="w-3.5 h-3.5 text-blue-400 group-hover/btn:text-white transition-all duration-300 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            Add
          </button>
        </div>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', initCommon);
