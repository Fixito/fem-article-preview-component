const popup = document.querySelector('.article-preview__share-popup');
const shareBtn = document.querySelector(
  '.article-preview__share-button'
);
const shareBtnActive = document.querySelector(
  '.article-preview__share-button--active'
);

shareBtn.addEventListener('click', (e) => {
  popup.classList.add('show-popup');
});

shareBtnActive.addEventListener('click', (e) => {
  popup.classList.remove('show-popup');
});
