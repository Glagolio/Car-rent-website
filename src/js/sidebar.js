const sidebarBurgerBtn = document.querySelector('.js-burger-btn');
const sideBarItem = document.querySelector('.js-sidebar');
const backdrop = document.querySelector('.backdrop');

const isOpenSidebar = () => {
  sideBarItem.classList.toggle('is-sidebar-open');
  backdrop.classList.toggle('is-hidden');
  document.body.style.overflow = 'hidden';
};

const onClickBackdrop = e => {
  if (e.target === e.currentTarget) {
    backdrop.classList.toggle('is-hidden');
    sideBarItem.classList.toggle('is-sidebar-open');
    backdrop.removeEventListener('click', onClickBackdrop);
    document.body.style.overflow = '';
  }
};

sidebarBurgerBtn.addEventListener('click', () => {
  backdrop.addEventListener('click', onClickBackdrop);
  isOpenSidebar();
});
