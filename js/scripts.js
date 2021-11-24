const swiper = new Swiper('.brands-slider, .shops-slider', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 28,
  autoplay: {
   delay: 1500,
  },
  breakpoints: {
    // when window width is >= 0
    0: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    // when window width is >= 992
    992: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function categoryMenuFunction() {
  document.getElementById("categoryDropdown").classList.toggle("show");
  document.getElementsByTagName( 'body' )[0].classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function openNav() {
  document.getElementById("mobile-menu").style.width = "250px";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0";
}