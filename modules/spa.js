const listBtn = document.querySelector('#listBtn');
const addNewBtn = document.querySelector('#addNewBtn');
const contactBtn = document.querySelector('#contactBtn');

const listSec = document.querySelector('.list');
const addNewSec = document.querySelector('.addNew');
const contactSec = document.querySelector('.contact');

listBtn.addEventListener('click', () => {
  listBtn.classList.add('active');
  addNewBtn.classList.remove('active');
  contactBtn.classList.remove('active');
  listSec.style.display = 'block';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  listBtn.classList.remove('active');
  addNewBtn.classList.add('active');
  contactBtn.classList.remove('active');
  listSec.style.display = 'none';
  addNewSec.style.display = 'block';
  contactSec.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  listBtn.classList.remove('active');
  addNewBtn.classList.remove('active');
  contactBtn.classList.add('active');
  listSec.style.display = 'none';
  addNewSec.style.display = 'none';
  contactSec.style.display = 'flex';
});
