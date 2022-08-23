import { points, moreText } from './vewportSize';
const loadMoreBtn = document.querySelectorAll('.js-show-all-button');
const reviews = document.querySelectorAll('.js-rivews__member');

const isOpen = () => {
  reviews.forEach(el => {
    el.classList.toggle('hidden');
  });
  loadMoreBtn.forEach(btn => {
    btn.classList.toggle('hidden');
  });

  if (
    Array.from(moreText).find(el => el.classList.contains('hidden') == true) ||
    (Array.from(points).find(el => el.classList.contains('hidden') == true) &&
      window.innerWidth < 720)
  ) {
    moreText.forEach(el => el.classList.toggle('hidden'));
    points.forEach(el => el.classList.toggle('hidden'));
  }
};

loadMoreBtn.forEach(btn => {
  btn.addEventListener('click', isOpen);
});
