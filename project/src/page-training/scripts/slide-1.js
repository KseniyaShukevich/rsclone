export default class Slide1 {
  constructor(verbObj) {
    this.infinitive = verbObj.infinitive;
    this.past = verbObj.past;
    this.participle = verbObj.participle;
    this.translation = verbObj.translation;
    this.slideHtml = `
    <div class="d-flex flex-column justify-content-between h-100 pt-5 pb-3">
      <div id="translate" class="translate display-6">${this.translation}</div>
      <div class="voice-wrapper d-flex flex-column">
        <div data-is-complete="0" class="btn btn-info btn-voice">
          <div class="btn-voice__text">${this.infinitive}</div>
          <i class="bi bi-play"></i>
        </div>
        <div data-is-complete="0" class="btn btn-info btn-voice">
          <div class="btn-voice__text">${this.past}</div>
          <i class="bi bi-play"></i>
        </div>
        <div data-is-complete="0" class="btn btn-info btn-voice">
          <div class="btn-voice__text">${this.participle}</div>
          <i class="bi bi-play"></i>
        </div>
      </div>
    </div>`;
    this.triggers = null;
  }

  initSlide() {
    const slideElem = document.createElement('div');
    const carousel = document.querySelector('.carousel-inner');

    slideElem.classList.add('carousel-item', 'h-100');
    slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('afterbegin', slideElem);

    this.triggers = [...slideElem.querySelectorAll('[data-is-complete]')];

    this.triggers.forEach((trigger) => trigger.addEventListener('click', () => {
      const text = trigger.textContent;
      const utterance = new SpeechSynthesisUtterance(text);
      const triggerElem = trigger.closest('[data-is-complete]');

      utterance.lang = 'en-En';
      triggerElem.dataset.isComplete = 1;

      speechSynthesis.speak(utterance);
      this.areYouWinnigSon();
    }));
  }

  areYouWinnigSon() {
    const condition = this.triggers.every((elem) => +elem.dataset.isComplete === 1);
    console.log(condition);
    // this.triggers.forEach((elem) => console.log(elem.dataset.isComplete));
    if (condition) alert('FUCK YEAH!!!!');
  }
}
