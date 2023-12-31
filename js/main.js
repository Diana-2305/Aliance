const navbar = document.querySelector(".navbar");    
const logo = document.querySelector(".logo-svg use");  
const mMenuToggle = document.querySelector(".mobile-menu-toggle");  
const menu = document.querySelector(".mobile-menu"); 
const isFront = document.body.classList.contains ("front-page")
const lightModeOn = (event) =>{
  navbar.classList.add("navbar-light");

}
const lightModeOff = (event) =>{
  navbar.classList.remove("navbar-light"); 
   
}

const changeNavHeight = (height) => {
 navbar.style.height = height;

}
const openMenu = (event) => { 
  //функция открыания меню
  menu.classList.add("is-open"); //вешает класс is-open
  mMenuToggle.classList.add("close-menu")
  document.body.style.overflow = "hidden"; //  запрещаем прокрутку под меню
  lightModeOn();
};  
const closeMenu = (event) =>  {
  //функция закрывания меню
  menu.classList.remove("is-open"); //убирает класс is-open
  mMenuToggle.classList.remove("close-menu")
  document.body.style.overflow = ""; //  возвращает прокрутку меню
  lightModeOff();
};  
window.addEventListener ("scroll", () => {
  this.scrollY > 1 ? changeNavHeight("4.5rem"): changeNavHeight("5.875rem");
  if (isFront) {
    this.scrollY > 1 ? lightModeOn(): lightModeOff();
  }
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu():openMenu();  
}); 

const swiperSteps = new Swiper(".steps-slider", {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    prevEl: ".steps-button-prev",
    nextEl: ".steps-button-next"
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window widt h is >= 640px
    1024: {
      slidesPerView: 4,
    },
  },
})

const swiper = new Swiper(".features-slider", {
  speed: 400,
  autoHeight: true,
  slidesPerView: 1,
  navigation: {
    prevEl: ".slider-button-prev",
    nextEl: ".slider-button-next",
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
    },
    // when window widt h is >= 640px
    1024: {
      slidesPerView: 4,
    },
  },
}); 
const swiperBlog = new Swiper(".blog-slider", {
  speed: 400,
  slidesPerView: 1,
  spaceBetween:30,
  navigation: {
    prevEl: ".blog-button-prev",
    nextEl: ".blog-button-next",
  },
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1, 
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
    },
    // when window widt h is >= 640px
    1024: {
      slidesPerView: 2,
    },
  },
}); 
const modal = document.querySelector(".modal")
const modalDialog = document.querySelector(".modal-dialog");

document.addEventListener("click", (event)=>{
  if (
    event.target.dataset.toggle == "modal" ||
    event.target.parentNode.dataset.toggle == "modal" ||
    (!event.composedPath().includes (modalDialog) && 
    modal.classList.contains("is-open"))
  ){
    event.preventDefault();
    modal.classList.toggle("is-open");
  }
});
document.addEventListener("keyup",(event) =>{
  if (event.key == "Escape" && modal.classList.contains("is-open")){
    modal.classList.toggle("is-open");
  }
})

