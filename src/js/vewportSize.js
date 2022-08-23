const starIcons = document.querySelectorAll('.fa-star');
const gasPumpIcon = document.querySelector('.fa-gas-pump');
const carIcon = document.querySelector('.fa-car');
const userGroupIcon = document.querySelector('.fa-user-group');
export const points = document.querySelectorAll('.js-points');
export const moreText = document.querySelectorAll('.js-more-text');

if (window.innerWidth < 768) {
  points.forEach(el => el.classList.remove('hidden'));
  moreText.forEach(el => el.classList.add('hidden'));
}
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    gasPumpIcon.classList.add('fa-xs');
    carIcon.classList.add('fa-xs');
    userGroupIcon.classList.add('fa-xs');
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
    gasPumpIcon.classList.remove('fa-xs');
    carIcon.classList.remove('fa-xs');
    userGroupIcon.classList.remove('fa-xs');
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
