// Nav Scroll
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('#nav');
    navbar.classList.toggle('scroll-fixed', window.scrollY > 30);
});


// Booking Section
