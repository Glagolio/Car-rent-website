const loadMoreBtn = document.querySelectorAll('.js-show-all-button');
const reviews = document.querySelectorAll('.js-rivews__member');

const isOpen = () => {
  reviews.forEach(el => {
    el.classList.toggle('hidden');
  });
  loadMoreBtn.forEach(btn => {
    btn.classList.toggle('hidden');
  });
};

loadMoreBtn.forEach(btn => {
  btn.addEventListener('click', isOpen);
});
