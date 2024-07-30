let fullName;

const modalEl = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

modalCloseBtn.addEventListener('click', closeModal);
consentForm.addEventListener('submit', handleSubmit);
modalChoiceBtns.addEventListener('mouseover', handleButton);

function handleButton(e) {
  if (e.target.type === 'button') {
    modalChoiceBtns.classList.toggle('reverse');
  }
}

setTimeout(function () {
  modalEl.style.display = 'inline';
}, 1500);

function closeModal() {
  modalEl.style.display = 'none';
}

function handleSubmit(e) {
  e.preventDefault();

  const userData = new FormData(consentForm);
  fullName = userData.get('fullName');

  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="assets/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
</div>
  `;
  setTimeout(function () {
    document.getElementById('upload-text').innerText = `Making the sale... `;
  }, 1500);
  clearModal();
}

function clearModal() {
  setTimeout(function () {
    document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="assets/pirate-hilarious-laugh.gif">
    </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
}
