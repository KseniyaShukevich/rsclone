import { Carousel, Popper } from 'bootstrap';
import { LSTORAGEID } from '../../services/constants';
import verbs from '../../../verbs.json';
import Type0 from './Type-0';
import Type1 from './Type-1';
import Type2 from './Type-2';
import Type3 from './Type-3';
import Type4 from './Type-4';

const getWord = () => {
  let word = localStorage.getItem(`${LSTORAGEID}word`);

  if (!word) {
    word = 'arise';
  }

  return word;
};

const key = getWord();
const verbObj = verbs[key];
const createSlide = (Class, currentVerbObj, carousel) => {
  const slide = new Class(currentVerbObj, verbs, carousel);
  return slide;
};
const myCarousel = document.querySelector('#carousel');
const carousel = new Carousel(myCarousel, {
  interval: false,
  wrap: false,
  cycle: false,
});

const slideClassCollection = [
  createSlide(Type4, verbObj, carousel),
  createSlide(Type3, verbObj, carousel),
  createSlide(Type2, verbObj, carousel),
  createSlide(Type1, verbObj, carousel),
  createSlide(Type0, verbObj, carousel),
];
slideClassCollection.forEach((slide) => slide.initSlide());

document.querySelector('.carousel-item').classList.add('active');
const slides = document.querySelectorAll('.carousel-item');
slides.forEach((elem, i) => {
  const observer = new MutationObserver(() => carousel.next());
  elem.setAttribute('data-slide-to', i);
  elem.setAttribute('data-is-solved', 0);
  observer.observe(elem, {
    attributeFilter: ['data-is-solved'],
  });
});
