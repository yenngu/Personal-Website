window.addEventListener('scroll', function() {
    const topBar = document.querySelector('.top-bar');
    if (window.scrollY > 0) {
        topBar.classList.add('hidden');
    } else {
        topBar.classList.remove('hidden');
    }
});
