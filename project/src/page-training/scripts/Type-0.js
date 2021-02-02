export default class Type0 {
  constructor(verbObj, verbs, carousel) {
    this.verb = {
      infinitive: verbObj.infinitive,
      past: verbObj.past,
      participle: verbObj.participle,
    };
    this.translation = verbObj.translation;
    this.carouselControls = carousel;
    this.slideHtml = `
    <div class="d-flex flex-column justify-content-between h-100 pt-5 pb-3">
      <div id="translate" class="translate display-6 pb-4 slide-font text-capitalize">${this.translation}</div>
      <div class="voice-wrapper d-flex flex-column">
        <div class="help-text">Прослушайте три формы глагола:</div>
        <div data-is-complete="0" class="btn btn-info btn-voice">
          <div class="btn-voice__text">${this.verb.infinitive}</div>
          <i class="bi bi-volume-up"></i>
        </div>
        <div data-is-complete="0" class="btn btn-info btn-voice">
          <div class="btn-voice__text">${this.verb.past}</div>
          <i class="bi bi-volume-up"></i>
        </div>
        <div data-is-complete="0" class="btn btn-info btn-voice">
          <div class="btn-voice__text">${this.verb.participle}</div>
          <i class="bi bi-volume-up"></i>
        </div>
      </div>
    </div>`;
    this.slideElem = null;
    this.triggers = null;
    this.mistakes = 0;
  }

  initSlide() {
    this.slideElem = document.createElement('div');
    const carousel = document.querySelector('.carousel-inner');

    this.slideElem.classList.add('carousel-item', 'h-100');
    this.slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('afterbegin', this.slideElem);

    this.triggers = [...this.slideElem.querySelectorAll('[data-is-complete]')];
    this.triggers.forEach((elem) => elem.addEventListener('click', () => this.addTrigger(elem)));
  }

  addTrigger(trigger) {
    const text = trigger.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    const triggerElem = trigger.closest('[data-is-complete]');

    // setVoice
    utterance.lang = 'en-En';
    triggerElem.dataset.isComplete = 1;

    speechSynthesis.speak(utterance);
    this.areYouWinnigSon();
  }

  areYouWinnigSon() {
    const winCondition = this.triggers.every((elem) => +elem.dataset.isComplete === 1);
    if (winCondition) {
      this.isComplete = true;
      this.goNext();
    }
  }

  goNext() {
    setTimeout(() => this.slideElem.setAttribute('data-is-solved', 1), 1500);
  }
}
