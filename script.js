const modalEl = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');

setTimeout(function () {
  modalEl.style.display = 'inline';
}, 1500);

modalCloseBtn.addEventListener('click', closeModal);

function closeModal() {
  modalEl.style.display = 'none';
}
