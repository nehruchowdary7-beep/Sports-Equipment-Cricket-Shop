function getSportVectorIcon(sport, index) {

  const icons = [

    `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,

    `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,

    `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,

    `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  ];
  return icons[index % icons.length];
}

function renderBrandsGrid() {
  const container = document.getElementById('brands-grid');
  if (!container || typeof SPORTX_DATA === 'undefined') return;

  container.innerHTML = SPORTX_DATA.brands.map((b, index) => {
    return `
      <div class="group rounded-3xl overflow-hidden bg-white dark:bg-[#16161D] border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">

        <div class="relative w-full h-52 overflow-hidden bg-slate-900">
          <img src="${b.image}" alt="${b.name}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div class="absolute top-3.5 right-3.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 shadow-md">
            ${b.sport} • ${b.country}
          </div>
        </div>

        <div class="p-6 pt-5 flex flex-col flex-1 justify-between text-left">

          <div>
            <div class="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
              ${getSportVectorIcon(b.sport, index)}
            </div>

            <h3 class="font-heading font-black text-xl text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-500 transition-colors">
              ${b.name}
            </h3>

            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              ${b.description}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs mt-auto">
            <span class="font-mono text-[11px] font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>100% OEM</span>
            </span>

            <a href="products.html?brand=${encodeURIComponent(b.linkFilter)}" class="inline-flex items-center gap-1.5 text-xs font-heading font-black text-blue-600 dark:text-blue-400 hover:text-blue-500 uppercase tracking-wider group/link">
              <span>Explore Gear</span>
              <svg class="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

        </div>

      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderBrandsGrid();
});
