/* eslint-disable no-bitwise */
export default class Type0 {
  constructor(verbObj, verbs) {
    this.verbs = verbs;
    this.verb = {
      infinitive: verbObj.infinitive,
      past: verbObj.past,
      participle: verbObj.participle,
    };
    this.translation = verbObj.translation;
    this.slideHtml = `
    <div class="d-flex flex-column justify-content-between h-100 pt-5 pb-3">
      <div class="verb-form-wrapper d-flex flex-column">
        <div class="btn btn-info btn-verb-form">${this.verb.infinitive}</div>
        <div class="btn btn-info btn-verb-form">${this.verb.past}</div>
        <div class="btn btn-info btn-verb-form">${this.verb.participle}</div>
      </div>
      <div class="select-translate-wrapper">
        <div class="help-text">Выберите правильный перевод:</div>
        <div class="select-translate d-flex flex-row flex-wrap">

        </div>
      </div>
    </div>`;
    this.slideElem = null;
    this.mistakes = 0;
    this.isComplete = false;
  }

  initSlide() {
    const carousel = document.querySelector('.carousel-inner');
    this.slideElem = document.createElement('div');

    this.slideElem.classList.add('carousel-item', 'h-100');
    this.slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('beforeend', this.slideElem);

    this.addTriggers();
  }

  generateTranslates() {
    const findRandomTranslate = () => {
      const verbKeys = Object.keys(this.verbs);
      const randomVerb = this.verbs[verbKeys[verbKeys.length * Math.random() << 0]];

      return randomVerb.translation;
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
      this.translation,
      findRandomTranslate(),
      findRandomTranslate(),
      findRandomTranslate(),
    ]);

    return result;
  }

  createButtons() {
    const words = this.generateTranslates();

    return words.map((word) => {
      const button = document.createElement('div');

      button.classList.add('btn', 'btn-select-translate');
      button.textContent = word;
      return button;
    });
  }

  addTriggers() {
    const container = this.slideElem.querySelector('.select-translate-wrapper');
    const buttons = this.createButtons();

    container.append(...buttons);
    container.addEventListener('click', (e) => {
      const button = e.target.closest('.btn-select-translate');
      const btnText = button.textContent;

      this.areYouWinnigSon(btnText);
    });
  }

  areYouWinnigSon(choice) {
    const answer = this.translation;
    const winCondition = choice === answer;
    if (winCondition) {
      this.isComplete = true;
      alert('FUCK YEAH!!!!');
      this.showNext();
    }
  }

  showNext() {
    // вот тутачки
  }
}
