
const btn = document.getElementById('read-more-button');
const moreText = document.getElementById('more-text');

btn.addEventListener('click', () => {
moreText.classList.toggle('show');
btn.textContent = moreText.classList.contains('show') ? 'Read Less' : 'Read More';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();

        // Adjust this value to match your navbar height
        const navbarHeight = document.querySelector("nav").offsetHeight;

        // Scroll to element with offset
        window.scrollTo({
          top: target.offsetTop - navbarHeight,
          behavior: "smooth"
        });
      };
})});