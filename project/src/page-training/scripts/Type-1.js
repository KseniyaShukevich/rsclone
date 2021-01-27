/* eslint-disable no-bitwise */
export default class Type1 {
  constructor(verbObj, verbs) {
    this.verbs = verbs;
    this.infinitive = verbObj.infinitive;
    this.past = verbObj.past;
    this.participle = verbObj.participle;
    this.translation = verbObj.translation;
    this.slideHtml = `
      <div class="d-flex flex-column justify-content-between h-100 pt-5 pb-3">
        <div class="translate display-6">${this.infinitive}</div>
        <div class="select-inputs-wrapper d-flex flex-column w-50">
          <input class="select-input__first-form form-control" type="text" value="" readonly>
          <input class="select-input__second-form form-control" type="text" value="" readonly>
          <input class="select-input__third-form form-control" type="text" value="" readonly>
        </div>
        <div class="voice-wrapper d-flex flex-row flex-wrap">
          <div class="help-text">Выберите три формы глагола:</div>
          <div id="btn-container" class="voice-wrapper d-flex flex-row flex-wrap">

          </div>
        </div>
      </div>`;
    this.conditions = [
      'infinitive',
      'past',
      'participle',
    ];
    this.order = 0;
    this.buttons = null;
    this.triggers = null;
  }

  initSlide() {
    const carousel = document.querySelector('.carousel-inner');
    const slideElem = document.createElement('div');

    slideElem.classList.add('carousel-item', 'h-100');
    slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('beforeend', slideElem);

    this.addTriggers(slideElem);
  }

  generateWords() {
    const conditions = [
      'infinitive',
      'past',
      'participle',
    ];
    const findRandom = () => {
      const verbKeys = Object.keys(this.verbs);
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
      this.infinitive,
      this.past,
      this.participle,
      findRandom(),
      findRandom(),
      findRandom(),
    ]);

    return result;
  }

  createButtons() {
    const words = this.generateWords();
    const buttons = Array(6).fill(null);

    return buttons.map((_, index) => {
      const button = document.createElement('div');

      button.classList.add('btn', 'btn-choice');
      button.textContent = `${words[index]}`;
      return button;
    });
  }

  addTriggers(elem) {
    const container = elem.querySelector('#btn-container');
    const inputs = elem.querySelectorAll('input');
    const buttons = this.createButtons();

    container.append(...buttons);
    container.addEventListener('click', (e) => {
      if (this.order < this.conditions.length) {
        const button = e.target.closest('.btn-choice');
        const btnText = button.textContent;
        const triggerWord = this[this.conditions[this.order]];

        if (btnText === triggerWord) {
          // add some actions
          inputs[this.order].innerHTML = button.textContent;
          inputs[this.order].textContent = button.textContent;
          inputs[this.order].value = button.textContent;
          this.order += 1;
        }
      }
    });
  }

  areYouWinnigSon() {
    const winCondition = this.triggers.every((elem) => +elem.dataset.isComplete === 1);
    if (winCondition) alert('FUCK YEAH!!!!');
  }
}
