import getUserToken from '../../services/data-user';
import request from '../../services/request';
import { LSTORAGEID } from '../../services/constants';

export default class Type4 {
  constructor(verbObj, verbs, carousel) {
    this.verbs = verbs;
    this.verb = {
      infinitive: verbObj.infinitive,
      past: verbObj.past,
      participle: verbObj.participle,
    };
    this.translation = verbObj.translation;
    this.carouselControls = carousel;
    this.slideHtml = `
    <div class="d-flex flex-column justify-content-between h-100 pt-5 pb-3">
      <div class="translate display-6 pb-4 slide-font text-capitalize">${this.translation}</div>
      <div class="three-forms-wrapper d-flex flex-column">
        <div class="three-forms__input">
          <div class="help-text mb-2">Введите инфинитив:</div>
          <input class="three-forms__first form-control input-width" type="text" value="">
        </div>
        <div class="three-forms__input">
          <div class="help-text mb-2">Введите прошедшую форму:</div>
          <input class="three-forms__second form-control input-width" type="text" value="">
        </div>
        <div class="three-forms__input">
          <div class="help-text mb-2">Введите вторую прошедшую форму:</div>
          <input class="three-forms__third form-control input-width" type="text" value="">
        </div>
      </div>
    </div>`;
    this.slideElem = null;
    this.mistakes = 0;
  }

  initSlide() {
    const carousel = document.querySelector('.carousel-inner');
    this.slideElem = document.createElement('div');

    this.slideElem.classList.add('carousel-item', 'h-100');
    this.slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('afterbegin', this.slideElem);

    this.inputs = this.slideElem.querySelectorAll('.form-control');
    this.addTriggers();
    this.inputs[0].focus();
  }

  addTriggers() {
    this.inputs.forEach((input, i) => input.addEventListener('input', (e) => {
      if (e.target.value.length > Object.values(this.verb)[i].length) {
        e.target.value = '';
        this.mistakes += 1;
      }
      if (e.target.value === Object.values(this.verb)[i]) {
        this.areYouWinningSon();
        e.target.setAttribute('readonly', 'readonly');
        if (i + 1 < this.inputs.length) this.inputs[(i + 1) % 3].focus();
      }
    }));
  }

  areYouWinningSon() {
    const win = [...this.inputs].every((input, i) => input.value === Object.values(this.verb)[i]);
    if (win) this.goNext();
  }

  goNext() {
    const resultSlide = document.querySelector('#result');
    const errors = resultSlide.querySelector('.errors-count');
    errors.textContent = '';
    
    if (!(+errors.textContent)) {
      const word = localStorage.getItem(`${LSTORAGEID}word`);
      request('/training/api/progress', 'POST', { token: getUserToken(), word });
    }
    setTimeout(() => this.slideElem.setAttribute('data-is-solved', 1), 1000);
    setTimeout(() => {
      errors.classList.remove('loader');
      errors.classList.add('errors-count_animate');
      errors.textContent = +errors.textContent + this.mistakes;
    }, 5000);
  }
}
