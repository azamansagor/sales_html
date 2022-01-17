/* landing page brand slider */
new Swiper('.brands-slider', {
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

/* landing page shops slider */
new Swiper('.shops-slider', {
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

/* landing page category slider */
new Swiper('.category-slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
   delay: 1500,
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

/* landing page category thumb slider */
new Swiper('.category-thumbs-slider', {
  loop: true,
  slidesPerView: 4,
  autoplay: {
   delay: 1500,
  },
  breakpoints: {
    // when window width is >= 0
    0: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    },
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

/* single product page slider */
var galleryThumbs = new Swiper(".gallery-thumbs", {
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 3,
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  direction: 'vertical'
});

var galleryMain = new Swiper(".gallery-main", {
  watchOverflow: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade',
    fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

galleryMain.on('slideChangeTransitionStart', function() {
  galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function(){
  galleryMain.slideTo(galleryThumbs.activeIndex);
});

/* header category dropdown functionality start */
// function categoryMenuFunction() {
//   document.getElementById("categoryDropdown").classList.toggle("show");
//   document.getElementsByTagName( 'body' )[0].classList.toggle("show");
// }
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropdown-button')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
/* header category dropdown functionality end */


/* mobile menu open close functionality start */
function openNav() {
  document.getElementById("mobile-menu").style.width = "250px";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0";
}
/* mobile menu open close functionality end */

/* shop page price range slider start */
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
if( sliderOne !== null && slideTwo !== null ){
  let displayValOne = document.getElementById("range1");
  let displayValTwo = document.getElementById("range2");
  let minGap = 0;
  let sliderTrack = document.querySelector(".slider-track");
  let sliderMaxValue = document.getElementById("slider-1").max;

  function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
  }
  function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
  }
  function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }  

  window.onload = function(){
    slideOne();
    slideTwo();
  }
}
/* shop page price range slider end */