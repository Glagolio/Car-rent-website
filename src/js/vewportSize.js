const starIcons = document.querySelectorAll('.fa-star');

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    starIcons.forEach(item => {
      item.classList.add('fa-xs');
    });
  } else {
    starIcons.forEach(item => {
      item.classList.remove('fa-xs');
    });
  }
});
