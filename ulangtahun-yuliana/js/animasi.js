const box = document.querySelector('.box');
const lid = document.querySelector('.lid');

box.addEventListener('click', () => {
  box.classList.toggle('box-open');
  lid.classList.toggle('lid-open');
});
