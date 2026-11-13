document.addEventListener('DOMContentLoaded', () => {
  const quoteLinks = document.querySelectorAll('a[href*="quote-section"]');
  quoteLinks.forEach(link => {
    link.addEventListener('click', () => {
      localStorage.setItem('sportx_selected_sport', 'football');
    });
  });
});