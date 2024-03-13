
const searchIcon = document.getElementById('search-icon');
const searchTextarea = document.getElementById('search-textarea');

searchIcon.addEventListener('click', () => {
    searchTextarea.style.display = 'block';
});


  // Fetch JSON data
  fetch("thumbnails.json")
      .then(response => response.json())
      .then(data => {
          // Call function to populate each category's carousel
          populateCarousel("popular", data.PopularOnNetflix);
          populateCarousel("only-on-netflix", data.OnlyOnNetflix);
          populateCarousel("new-releases", data.NewReleases);
          populateCarousel("trending-now", data.TrendingNow);
      })
      .catch(error => console.error("Error fetching JSON:", error));

  // Function to populate a category's carousel
  function populateCarousel(category, items) {
      const carousel = document.querySelector(`.${category} .carousel`);
      // Clear previous content
      carousel.innerHTML = "";
      // Iterate through items and create cards
      items.forEach(item => {
          const card = document.createElement("div");
          card.classList.add("card");
          const thumbnail = document.createElement("img");
          thumbnail.src = item.thumbnailurl;// Assuming there's a title property
          card.appendChild(thumbnail);
          carousel.appendChild(card);
      });
  }

