console.log('funguju!');

const bulb = document.querySelector('.bulb');

const bulbOn = () => {
  bulb.classList.add('bulb--on');
};

bulb.addEventListener('keydown', bulbOn);
