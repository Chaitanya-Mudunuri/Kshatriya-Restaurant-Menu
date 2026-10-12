window.addEventListener('load', () => {
    setTimeout(() => {
        var loader = document.getElementById('loading-screen');
        if (loader) loader.classList.add('hidden');
    }, 2200);
});

function filterMenu(type, btn) {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.card').forEach(card => {
        if (type === 'all') {
            card.style.display = '';
        } else {
            card.style.display = (card.getAttribute('data-type') === type) ? '' : 'none';
        }
    });
    document.querySelectorAll('.category-section').forEach(sec => {
        const visible = sec.querySelectorAll('.card:not([style*="none"])');
        sec.style.display = visible.length ? '' : 'none';
    });
}
