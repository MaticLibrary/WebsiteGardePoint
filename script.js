document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dziękujemy za kontakt! Skontaktujemy się wkrótce.');
    this.reset();
});