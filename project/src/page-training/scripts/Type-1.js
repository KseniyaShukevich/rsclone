/* eslint-disable no-bitwise */
export default class Type1 {
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
        <div class="translate display-6 pb-4 slide-font text-capitalize">${this.verb.infinitive}</div>
        <div class="select-inputs-wrapper d-flex flex-column ">
          <input data-is-complete="0" class="select-input__first-form form-control input-width" type="text" value="" readonly>
          <input data-is-complete="0" class="select-input__second-form form-control input-width" type="text" value="" readonly>
          <input data-is-complete="0" class="select-input__third-form form-control input-width" type="text" value="" readonly>
        </div>
        <div class="voice-wrapper d-flex flex-column flex-wrap">
          <div class="help-text">Выберите три правильные формы глагола:</div>
          <div id="btn-container" class="voice-wrapper d-flex flex-row flex-wrap"></div>
        </div>
      </div>`;
    this.slideElem = null;
    this.triggerElems = null;
    this.order = 0;
    this.mistakes = 0;
  }

  initSlide() {
    const carousel = document.querySelector('.carousel-inner');
    this.slideElem = document.createElement('div');

    this.slideElem.classList.add('carousel-item', 'h-100');
    this.slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('afterbegin', this.slideElem);

    this.triggerElems = this.slideElem.querySelectorAll('input');
    this.addTriggers();
  }

  generateRandomWords() {
    const findRandom = () => {
      const verbKeys = Object.keys(this.verbs);
      const conditions = Object.keys(this.verb);
      const randomVerb = this.verbs[verbKeys[verbKeys.length * Math.random() << 0]];
      const randomCondition = conditions[conditions.length * Math.random() << 0];

      return randomVerb[randomCondition];
    };
    const shuffle = (array) => {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    const result = shuffle([
      ...Object.values(this.verb),
      findRandom(),
      findRandom(),
      findRandom(),
    ]);

    return result;
  }

  createButtons() {
    const words = this.generateRandomWords();

    return words.map((word) => {
      const button = document.createElement('div');

      button.classList.add('btn', 'btn-choice');
      button.textContent = word;
      return button;
    });
  }

  addTriggers() {
    const conditions = Object.values(this.verb);
    const container = this.slideElem.querySelector('#btn-container');
    const buttons = this.createButtons();

    container.append(...buttons);
    container.addEventListener('click', (e) => {
      if (this.order < conditions.length) {
        const button = e.target.closest('.btn-choice');
        const btnText = button.textContent;
        const triggerWord = conditions[this.order];

        if (btnText === triggerWord) {
          this.triggerElems[this.order].value = button.textContent;
          this.triggerElems[this.order].dataset.isComplete = 1;
          this.order += 1;
        } else {
          this.mistakes += 1;
        }
        this.areYouWinnigSon();
      }
    });
  }

  areYouWinnigSon() {
    const winCondition = [...this.triggerElems].every((elem) => +elem.dataset.isComplete === 1);
    if (winCondition) this.goNext();
  }

  goNext() {
    const resultSlide = document.querySelector('#result');
    const errors = resultSlide.querySelector('.errors-count');
    errors.textContent = +errors.textContent + this.mistakes;
    setTimeout(() => this.slideElem.setAttribute('data-is-solved', 1), 1500);
  }
}
