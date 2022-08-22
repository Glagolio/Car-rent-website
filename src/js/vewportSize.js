const starIcons = document.querySelectorAll('.fa-star');
export const points = document.querySelectorAll('.js-points');
export const moreText = document.querySelectorAll('.js-more-text');

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    starIcons.forEach(item => {
      item.classList.add('fa-xs');
    });
    moreText.forEach(el => {
      el.classList.add('hidden');
    });
    points.forEach(el => {
      el.classList.remove('hidden');
    });
  } else {
    starIcons.forEach(item => {
      item.classList.remove('fa-xs');
    });
    moreText.forEach(el => {
      el.classList.remove('hidden');
    });
    points.forEach(el => {
      el.classList.add('hidden');
    });
  }
});
