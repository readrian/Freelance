const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {

  hamburger.querySelectorAll("span").forEach((span) => span.classList.toggle("open"));
  navUL.classList.toggle('show');

});