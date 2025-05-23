/* ***** sidebar ***** */
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
// show sidebar
navBtn.addEventListener('click', () => {
  sidebar.classList.add('show-sidebar');
});
// close sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});

/* ***** navbar fixed ***** */
const navbar = document.querySelector('#nav');
// add fixed class to navbar
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

/* ***** footer ***** */
const date = document.querySelector('#date');
// set date
date.innerHTML = new Date().getFullYear();
