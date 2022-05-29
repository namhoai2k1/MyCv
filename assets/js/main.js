const navMenu = document.getElementById('nav__menu');
const navClose = document.getElementById('nav__close');
const navToggle = document.getElementById('nav__toggle');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

const navLinks = document.querySelectorAll('.nav__link')

function removeMenu() {
    navMenu.classList.remove("show-menu")
}

navLinks.forEach(navlink => {
    navlink.addEventListener('click', removeMenu)
})

// ==================================skills===========================================
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close"
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// ==========================Qualification Tabs=============================
const tabs = document.querySelectorAll('.qualification__button')
const tabContents = document.querySelectorAll('.qualification__content')

tabs.forEach((tab, index) => {

    tab.addEventListener('click', () => {
        document.querySelector('.qualification__active.qualification__button').classList.remove('qualification__active')
        document.querySelector('.qualification__active.qualification__content').classList.remove('qualification__active')

        tabs[index].classList.add('qualification__active')
        tabContents[index].classList.add('qualification__active')
    })
})

// ===========================SERVICES MODAL==================================

const modalViews = document.querySelectorAll('.services__modal')
const modalBtn = document.querySelectorAll('.services__button')
const modalClose = document.querySelectorAll('.services__modal-close')

modalBtn.forEach((e, index) => {
    e.addEventListener('click', () => {
        modalViews[index].classList.add('active-modal')
    })
})

modalClose.forEach((e, index) => {
    e.addEventListener('click', () => {
        modalViews[index].classList.remove('active-modal')
    })
})
// ============================Portfolio swiper=====================================
var swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    speed: 800,
});
// =========================Testimmonial swiper===============================
var swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    autoplay: {
        delay: 5000,
    },
    speed: 800,
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
});
// ============================ScrollActive Link=============================
const sections = document.querySelectorAll('section[id]')
console.log(sections);

function scrollActive(){
    const scrollY = window.pageYOffset
    console.log(scrollY)
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// =========================Change background header===============================
function scrollHeader() {
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// =========================show scroll top =============================
function scrollTop() {
    const scrollTop = document.getElementById('scrollup')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)
// ===========================dark light theme =================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

