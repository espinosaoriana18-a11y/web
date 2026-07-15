
const swiperHeader = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { el: ".swiper-pagination", clickable: true },
    
});


const menuSwiper = new Swiper(".myGlobalSwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true, 
    allowTouchMove: true, 
});


const infoSwiper = new Swiper(".myInfoSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    speed: 500
});


const tabButtons = document.querySelectorAll(".tab-button");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));
        
        menuSwiper.slideTo(index);
        infoSwiper.slideTo(index);
    });
});

menuSwiper.on("slideChange", () => {
    const activeIndex = menuSwiper.activeIndex;
    infoSwiper.slideTo(activeIndex); 
    
    tabButtons.forEach(button => button.classList.remove("active"));
    if (tabButtons[activeIndex]) {
        tabButtons[activeIndex].classList.add("active");
    }
});

document.addEventListener("DOMContentLoaded", function () {

  const elementosAAnimar = document.querySelectorAll(".horario-info h2, .horario .txt");

  const opciones = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  const observador = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, opciones);

  elementosAAnimar.forEach(elemento => {
    observador.observe(elemento);
  });
});



document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("sliderTrack");
    const prevBtn = document.getElementById("prevFoto");
    const nextBtn = document.getElementById("nextFoto");
    
    let posicionActual = 0;

    function moverSlider(index) {
        posicionActual = index;
        track.style.transform = `translateX(-${posicionActual * 50}%)`;
    }

    nextBtn.addEventListener("click", () => {
        if (posicionActual === 0) moverSlider(1);
        else moverSlider(0);
    });

    prevBtn.addEventListener("click", () => {
        if (posicionActual === 1) moverSlider(0);
        else moverSlider(1);
    });

    
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        manejarDeslizamiento();
    }, { passive: true });

    function manejarDeslizamiento() {
        const umbral = 50;
        if (touchStartX - touchEndX > umbral) {
            moverSlider(1);
        }
        if (touchEndX - touchStartX > umbral) {
            moverSlider(0);
        }
    }
});

const myBannerSwiper = new Swiper('.myBannerSwiper', {
  slidesPerView: 1,
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

