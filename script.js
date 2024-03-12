const searchIcon = document.getElementById('search-icon');
const searchTextarea = document.getElementById('search-textarea');

searchIcon.addEventListener('click', () => {
  searchTextarea.style.display = 'block';
});