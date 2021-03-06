/* eslint-disable class-methods-use-this */
/* eslint-disable no-bitwise */
export default class Type3 {
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
      <div class="letter-input-wrapper d-flex flex-column">
        <input class="letter-input form-control input-width" type="text" value="" readonly>
      </div>
      <div class="voice-wrapper">
        <div class="help-text">Составьте из букв <span></span> форму глагола:</div>
        <div id="letter-container" class="voice-wrapper d-flex flex-row flex-wrap"></div>
      </div>
    </div>`;
    this.verbFormCollection = ['первую', 'вторую', 'третью'];
    this.slideElem = null;
    this.letterContainer = null;
    this.letterButtons = null;
    this.order = 0;
    this.mistakes = 0;
  }

  initSlide() {
    const carousel = document.querySelector('.carousel-inner');
    this.slideElem = document.createElement('div');

    this.slideElem.classList.add('carousel-item', 'h-100');
    this.slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('afterbegin', this.slideElem);

    // this.addTriggers();
    this.letterContainer = this.slideElem.querySelector('#letter-container');
    this.letterInput = this.slideElem.querySelector('.letter-input');

    this.addTriggers();
    this.initState();
  }

  generateLetters(word) {
    const shuffle = (array) => {
      const shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    const letters = shuffle(word.split(''));
    const result = letters.map((letter) => {
      const button = document.createElement('div');
      button.classList.add('btn', 'btn-letter');
      button.textContent = letter;
      return button;
    });
    return result;
  }

  addTriggers() {
    this.letterContainer.addEventListener('click', (e) => {
      const button = e.target.closest('.btn');

      if (!button) return;

      const btnText = button.textContent;

      if (!button.classList.contains('active')) {
        this.letterInput.value += btnText;
        button.classList.add('active');
        if (this.letterButtons.every((btn) => btn.classList.contains('active'))) {
          this.areYouWinnigSon();
        }
      }
    });
  }

  initState() {
    this.letterButtons = this.generateLetters(Object.values(this.verb)[this.order]);
    this.letterContainer.append(...this.letterButtons);
    this.slideElem.querySelector('span').textContent = this.verbFormCollection[this.order];
  }

  reset() {
    this.letterButtons.forEach((button) => {
      button.classList.remove('active');
    });
    this.letterInput.value = '';
  }

  next() {
    this.letterContainer.innerHTML = '';
    this.initState();
  }

  areYouWinnigSon() {
    if (this.letterInput.value === Object.values(this.verb)[this.order]) {
      this.order += 1;
      if (this.order < this.verbFormCollection.length) {
        this.reset();
        this.next();
      } else {
        this.goNext();
      }
    } else {
      this.mistakes += 1;
      this.reset();
    }
  }

  goNext() {
    const resultSlide = document.querySelector('#result');
    const errors = resultSlide.querySelector('.errors-count');
    errors.textContent = +errors.textContent + this.mistakes;
    setTimeout(() => this.slideElem.setAttribute('data-is-solved', 1), 1000);
  }
}
