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