function handleContactFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name')?.value || 'Valued Athlete';
  if (typeof showToast === 'function') {
    showToast(`Thanks ${name}! We've received your inquiry and will reply shortly.`, 'success');
  }
  e.target.reset();
}

document.addEventListener('DOMContentLoaded', () => {

});
