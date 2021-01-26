<<<<<<< HEAD
const speakContainer = document.getElementById('test-speak');

speakContainer.addEventListener('click', (e) => {
  const text = e.target.closest('div').querySelector('p').textContent;
  const utterance = new SpeechSynthesisUtterance(text);

  console.log(window.speechSynthesis.getVoices());
  speechSynthesis.speak(utterance);
});
=======
import { Carousel, Popper } from 'bootstrap';

console.log('I am here!');
>>>>>>> markup
