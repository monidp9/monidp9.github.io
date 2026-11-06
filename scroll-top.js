// "Back to top" button: shown after scrolling down, smooth-scrolls to the top.
(function () {
    const button = document.querySelector('.scroll-to-top');
    if (!button) return;

    button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function update() {
        button.style.display = document.documentElement.scrollTop > 100 ? 'block' : 'none';
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
})();
