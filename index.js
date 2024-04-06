console.log('funguju!');

const bulb = document.querySelector('.bulb');

const bulbOn = () => {
  bulb.classList.toggle('bulb--on');
};

document.addEventListener('keydown', bulbOn);
