export default class Type5 {
  constructor(verbObj, verbs) {
    this.slideHtml = `
        <div class="d-flex flex-column justify-content-evenly h-100 pt-5 pb-3 text-center">
            <div class="mb-3">
                <div class="help-text mb-2">Количество ошибок:</div>
                <div class="errors-count">0</div>
            </div>
            <div class="mb-3">
                <div class="help-text mb-2">Хотите повторить?</div>
                <a class="btn btn_repeat" href="">Повторить</a>
            </div>
            <div class="mb-3">
                <div class="help-text mb-2">Или хотите выбрать другой глагол?</div>
                <a class="btn btn_new-game" href="">Выбрать другой глагол</a>
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

  addTriggers() {
        
  }

  areYouWinningSon() {
    if ([...this.inputs].every((input, i) => input.value === Object.values(this.verb)[i])) {
      this.isComplete = true;
      alert('HELL YEAH!!!');
      this.showNext();
    }
  }

  showNext() {
    //вот тутачки
  }
}