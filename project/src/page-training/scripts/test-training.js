import { Carousel, Popper } from 'bootstrap';
import getWord from './get-word';
import verbs from '../../../verbs.json';
import Type0 from './Type-0';
import Type1 from './Type-1';
import Type2 from './Type-2';

const key = getWord();
const verbObj = verbs[key];
const createSlide = (Class, currentVerbObj) => {
  const slide = new Class(currentVerbObj, verbs);
  return slide;
};
const slideClassCollection = [
  createSlide(Type0, verbObj),
  createSlide(Type1, verbObj),
  createSlide(Type2, verbObj),
];
slideClassCollection.forEach((slide) => slide.initSlide());
document.querySelector('.carousel-item').classList.add('active');

const myCarousel = document.querySelector('#carousel');
const slides = document.querySelectorAll('.carousel-item');
slides.forEach((elem, i) => elem.setAttribute('data-slide-to', i));
const carousel = new Carousel(myCarousel, {
  interval: false,
  wrap: false,
  cycle: false,
});
