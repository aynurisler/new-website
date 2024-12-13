const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    event.stopPropagation();
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    if (isOpen) {
        toggleBtnIcon.classList.remove('fa-bars');
        toggleBtnIcon.classList.add('fa-xmark');
    } else {
        toggleBtnIcon.classList.remove('fa-xmark');
        toggleBtnIcon.classList.add('fa-bars');
    }
};

document.addEventListener("click", (e) => {
    if (!dropDownMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        dropDownMenu.classList.remove("open");
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
});

var swiper = new Swiper(".swiper", {
    initialSlide: 3,
    centeredSlides: true,
    loop: true,
    allowTouchMove: false,
    effect: "coverflow",
    coverflowEffect: {
        rotate: -10,
        stretch: -45,
        depth: 90,
        modifier: 1,
        slideShadows: true,
    },
    mousewheel: {
        thresholdDelta: 50,
        sensitivity: 1,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        600: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
    autoplay: {
        delay: 5000, // 3000ms = 3 saniye
        disableOnInteraction: false, // Slider'a tıklanırsa autoplay durmaz
    },
});

const slides = document.querySelectorAll(".swiper-slide");

function flipActivesSlide() {
    const activesSlide = document.querySelector(".swiper-slide-active");
    const button = activesSlide?.querySelector("button");

    if (button) {
        button.onclick = (event) => {
            event.stopPropagation();
            activesSlide.classList.add("flipped");
        };
    }
}

// Flip class'ı kaldırma
slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        if (
            slide.classList.contains("swiper-slide-active") &&
            slide.classList.contains("flipped")
        ) {
            slide.classList.remove("flipped");
        }
    });
});
swiper.on("slideChangeTransitionEnd", () =>{
    slides.forEach((slide) =>{
        slide.classList.remove("flipped");
    });
    flipActivesSlide();
})
flipActivesSlide();

