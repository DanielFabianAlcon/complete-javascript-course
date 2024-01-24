'use strict';
// Variables for the example
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// First function called for active the modal
const openModal = function () {
  console.log('Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
};
// Second function called for close it from the first function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
