export default class Type4 {
  constructor(verbObj, verbs) {
    this.verb = {
      infinitive: verbObj.infinitive,
      past: verbObj.past,
      participle: verbObj.participle,
    };
    this.verbs = verbs;
    this.translation = verbObj.translation;
    this.slideHtml = `
    <div class="d-flex flex-column justify-content-between h-100 pt-5 pb-3">
      <div class="translate display-6">${this.translation}</div>
      <div class="three-forms-wrapper d-flex flex-column w-50">
        <div class="three-forms__input">
          <input class="three-forms__first form-control" type="text" value="">
          <i class="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i>
        </div>
        <div class="three-forms__input">
          <input class="three-forms__second form-control" type="text" value="">
          <i class="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i>
        </div>
        <div class="three-forms__input">
          <input class="three-forms__third form-control" type="text" value="">
          <i class="bi bi-info-circle" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i>
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
      alert('HELL YEAH!!!');
    }
  }
}
