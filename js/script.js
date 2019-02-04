
const container = document.querySelector('main');
const nav = document.querySelector('nav');

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
