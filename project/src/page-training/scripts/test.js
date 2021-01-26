import { Carousel, Popper } from 'bootstrap';
import getWord from './get-word';
import verbs from '../../../verbs.json';
import Slide1 from './slide-1';

const key = getWord();
const verbObj = verbs[key];
const slide1 = new Slide1(verbObj);
slide1.initSlide();
slide1.areYouWinnigSon();

document.querySelector('.carousel-item').classList.add('active');
