function toggleMenu() {
  const nav = document.getElementById('nav');
  if (nav.style.display === 'block') nav.style.display = 'none';
  else nav.style.display = 'block';
}

function setCarouselSlide(slide) {
  const oldActiveIcon = document.getElementsByClassName('fa-solid fa-circle')[0];
  oldActiveIcon.className = 'fa-regular fa-circle';
  const newActiveIcon = document.getElementById(`carousel-btn-i-${slide}`);
  newActiveIcon.className = 'fa-solid fa-circle';

  const reviewsContainer = document.getElementsByClassName('reviews-container')[0];
  if (slide == 0) reviewsContainer.style.justifyContent = 'flex-start';
  if (slide == 1) reviewsContainer.style.justifyContent = 'center';
  if (slide == 2) reviewsContainer.style.justifyContent = 'flex-end';
}