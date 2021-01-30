const speakContainer = document.getElementById('test-speak');
speakContainer.addEventListener('click', (e) => {
  const text = e.target.closest('div').querySelector('p').textContent;
  const utterance = new SpeechSynthesisUtterance(text);

  console.log(window.speechSynthesis.getVoices());
  speechSynthesis.speak(utterance);
});
const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.getElementById('voices');
const options = document.querySelectorAll('input, #text');
const speakButton = document.getElementById('speak');
console.log(document.getElementById('stop'));
const stopButton = document.getElementById('stop');
let voices = [];

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map((voice) => `<option value='${voice.name}'>${voice.name} (${voice.lang})</option>`)
    .join('');
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    msg.text = document.getElementById('textarea').value;
    speechSynthesis.speak(msg);
  }
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
