const hoverEffect = document.querySelectorAll('.hover-effect');

console.log(hoverEffect);

function touchStart(e) {
  e.preventDefault();
  e.style.background = "blue";
}

function touchEnd(e) {
  e.preventDefault();
  e.target.classList.remove('hover');
}

hoverEffect.forEach(hoverEffect => {
  hoverEffect.addEventListener('touchstart', touchStart, false);
  hoverEffect.addEventListener('touchend', touchEnd, false);
});
