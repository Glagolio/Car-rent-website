const inputRage = document.querySelector('.js-input-price');
const priceRage = document.querySelector('.js-price');

inputRage.value = 100;

inputRage.addEventListener('input', () => {
  priceRage.innerText = inputRage.value;
});
