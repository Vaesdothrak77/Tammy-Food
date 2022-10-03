const swiper = new Swiper('.swiper__cards', {
   spaceBetween: 20,
   slidesPerView:3,

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 15
      },
      460: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      720: {
         slidesPerView: 3,
         spaceBetween: 25
      },
      980: {
         slidesPerView: 4,
         spaceBetween: 40
      }
   },
});
