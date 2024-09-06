console.log("Hello world");

const shareBtn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const postBtn = document.querySelector('.btn-post');

shareBtn.addEventListener('click', () => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    shareBtn.textContent = 'Close';
  } else {
    form.classList.add('hidden');
    shareBtn.textContent = 'Share a fact';
  }
});

postBtn.addEventListener('click', () => {
  form.classList.add('hidden');
  shareBtn.textContent = 'Share a fact';
});