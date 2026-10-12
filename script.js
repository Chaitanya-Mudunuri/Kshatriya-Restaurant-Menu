window.addEventListener('load', () => {
    setTimeout(() => {
        var loader = document.getElementById('loading-screen');
        if (loader) loader.classList.add('hidden');
    }, 2200);
});