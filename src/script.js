function toggleMenu() {
  const nav = document.getElementById('nav-list');
  console.log(nav.style.display);
  if (nav.style.display === 'block') nav.style.display = 'none';
  else nav.style.display = 'block';
}