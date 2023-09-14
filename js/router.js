function onTopClick() {
  window.location.hash = "#contactForm";
}

const talkButton = document.querySelector('.talk-to-us')
const findButton = document.querySelector('.findButton')
const infoButton = document.querySelector('.InfoButton')

talkButton.addEventListener('click', onTopClick())
findButton.addEventListener('click', onTopClick())
infoButton.addEventListener('click', onTopClick())