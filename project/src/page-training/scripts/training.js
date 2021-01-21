const items = document.querySelector('.items');
let currentSlide = 0;
const turnNext = (direction) => {
  if (direction) {
    currentSlide += 1;
    items.style.left = `${-100 * currentSlide}vw`;
  } else {
    currentSlide -= 1;
    items.style.left = `${-100 * currentSlide}vw`;
  }
};

document.querySelector('.arrow.right').onclick = () => turnNext(true);
document.querySelector('.arrow.left').onclick = () => turnNext(false);
