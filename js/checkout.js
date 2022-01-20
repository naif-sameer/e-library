const checkoutElement = document.querySelector('.checkout-product-number');

const selectElements = document.querySelectorAll('.c-select');

function saveToLocalStorage(key, value) {
  if ((value !== '') | (value === 0)) {
    localStorage.setItem(key, value);
  }

  console.log(localStorage);
}

function getAllSelectValue() {
  let total = 0;

  selectElements.forEach((item) => {
    total += Number(item.value);
  });

  saveToLocalStorage('checkout-product-nubmer', total);

  return total;
}

selectElements.forEach((item, index) => {
  item.addEventListener('change', () => {
    saveToLocalStorage(`select-${index}`, item.value);

    checkoutElement.textContent = getAllSelectValue();
  });
});

function isSaveOnLocalStorage() {
  selectElements.forEach((item, index) => {
    if (!localStorage.getItem(`select-${index}`)) {
      saveToLocalStorage(`select-${index}`, item.value);
    }
  });
}

// run after the page load
window.onload = function getValuesFromLocalStorage() {
  isSaveOnLocalStorage();

  selectElements.forEach((item, index) => {
    item.value = localStorage.getItem(`select-${index}`);
  });

  checkoutElement.textContent = getAllSelectValue();
  console.log(localStorage);
};
