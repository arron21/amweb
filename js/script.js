
const container = document.querySelector('main');
const nav = document.querySelector('nav');

const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks)
container.addEventListener('scroll', (e) => {
  console.log(e)
  console.log(e.target.scrollTop)
  const scroll = e.target.scrollTop
  if (e.target.scrollTop >= 100) {
    nav.classList.add('collapsed');
  } else {
    nav.classList.remove('collapsed');
  }
})
