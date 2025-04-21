
const btn = document.getElementById('read-more-button');
const moreText = document.getElementById('more-text');

btn.addEventListener('click', () => {
moreText.classList.toggle('show');
btn.textContent = moreText.classList.contains('show') ? 'Read Less' : 'Read More';
});
