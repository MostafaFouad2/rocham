const navMenu = document.querySelector('.links');
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle("active-links");
    document.body.classList.toggle("scroll");
 
});


let swiper = new Swiper(".swiper", {
    slidesPerView : 4,
    spaceBetween : 10,
    centerSlide:'true',
    fade:'true',
    pagination:{
        el:".swiper-pagination",
        clickable : true,
        
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0:{
            slidesPerView : 2,
            slidesPerGroup : 2,
        },
        768:{
            slidesPerView : 3,
            slidesPerGroup : 3,
        },
        1200:{
            slidesPerView : 4,
            slidesPerGroup : 4,
        },
    },
  });