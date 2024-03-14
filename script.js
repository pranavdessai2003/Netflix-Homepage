
const searchIcon = document.getElementById('search-icon');
const searchTextarea = document.getElementById('search-textarea');

searchIcon.addEventListener('click', () => {
    searchTextarea.style.display = 'block';
});



  

//mute button function
function muteSound(){
    const  video = document.getElementById('background-video');
    
    const  btnMute = document.getElementById('mutebtn');
    

    if (video.muted) {
        btnMute.className="fa-solid fa-volume-high";
        video.muted=false;
    } else{
        btnMute.className="fa-solid fa-volume-xmark";
        video.muted=true;
    }
    }



//json fetching for carousel
  fetch("thumbnails.json")
      .then(response => response.json())
      .then(data => {
          populateCarousel("popular", data.PopularOnNetflix);
          populateCarousel("only-on-netflix", data.OnlyOnNetflix);
          populateCarousel("new-releases", data.NewReleases);
          populateCarousel("trending-now", data.TrendingNow);
      })
      .catch(error => console.error("Error fetching JSON:", error));

  function populateCarousel(category, items) {
      const carousel = document.querySelector(`.${category} .carousel`);
      carousel.innerHTML = "";
      items.forEach(item => {
          const card = document.createElement("div");
          card.classList.add("card");
          const thumbnail = document.createElement("img");
          thumbnail.src = item.thumbnailurl;
          card.appendChild(thumbnail);
          carousel.appendChild(card);
      });
  }



//code for navbar transition
const navEl = document.getElementById('navbar');

window.addEventListener( 'scroll', () => {
    if(window.scrollY === 0){
        navEl.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
    else{
        navEl.style.backgroundColor= "rgb(20, 20, 20)";
    }
});