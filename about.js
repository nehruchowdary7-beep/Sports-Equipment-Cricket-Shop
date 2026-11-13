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
      const format = counter.getAttribute('data-format') || '';
      const current = progress >= 1 ? target : Math.round(target * ease);

      let formattedNumber = current;
      if (format === 'comma') {
        formattedNumber = current.toLocaleString('en-US');
      }

      counter.textContent = formattedNumber + suffix;
    });

    if (progress < 1) {
      requestAnimationFrame(updateCounters);
    }
  }

  requestAnimationFrame(updateCounters);
}

document.addEventListener('DOMContentLoaded', () => {
  animateHeroCounters();
});