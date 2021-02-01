export default class Type4 {
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
    this.isComplete = false;
  }

  initSlide() {
    const carousel = document.querySelector('.carousel-inner');
    this.slideElem = document.createElement('div');

    this.slideElem.classList.add('carousel-item', 'h-100');
    this.slideElem.innerHTML = this.slideHtml;
    carousel.insertAdjacentElement('beforeend', this.slideElem);

    this.inputs = this.slideElem.querySelectorAll('.form-control');
    this.addTriggers();
    this.inputs[0].focus();
  }

  addTriggers() {
    this.inputs.forEach((input, i) => input.addEventListener('input', () => {
      if (input.value === Object.values(this.verb)[i]) {
        this.areYouWinningSon();
        input.setAttribute('readonly', 'readonly');
        if (i + 1 < this.inputs.length) this.inputs[i + 1].focus();
      }
    }));
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
