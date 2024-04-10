const searchIcon = document.getElementById("search-icon");
const searchTextarea = document.getElementById("search-textarea");

searchIcon.addEventListener("click", () => {
  searchTextarea.style.display = "block";
});

//mute button function
function muteSound() {
  const video = document.getElementById("background-video");

  const btnMute = document.getElementById("mutebtn");

  if (video.muted) {
    btnMute.className = "fa-solid fa-volume-high";
    video.muted = false;
  } else {
    btnMute.className = "fa-solid fa-volume-xmark";
    video.muted = true;
  }
}

//json fetching for carousel
fetch("thumbnails.json")
  .then((response) => response.json())
  .then((data) => {
    populateCarousel("popular", data.PopularOnNetflix);
    populateCarousel("only-on-netflix", data.OnlyOnNetflix);
    populateCarousel("new-releases", data.NewReleases);
    populateCarousel("trending-now", data.TrendingNow);
  })
  .catch((error) => console.error("Error fetching JSON:", error));

function populateCarousel(category, items) {
  const slider = document.querySelector(`.${category} .slider`);
  slider.innerHTML = "";
  items.forEach((item) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    const thumbnail = document.createElement("img");
    thumbnail.src = item.thumbnailurl;
    slide.appendChild(thumbnail);
    slider.appendChild(slide);
  });
}

let slideIndex = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    
    slideIndex += n;
    if (slideIndex < 0) slideIndex = slideCount - 1;
    if (slideIndex >= slideCount) slideIndex = 0;
    
    const offset = -100 * slideIndex;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

//code for navbar transition
const navEl = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    navEl.style.backgroundColor = "rgba(0, 0, 0, 0)";
  } else {
    navEl.style.backgroundColor = "rgb(20, 20, 20)";
  }
});
