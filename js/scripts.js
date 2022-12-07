// Slider

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 17,  
    pagination: {
        el: '.swiper-pagination',
    },
   
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: "auto",
        },
    }
});

// Burger

function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.header__list')
    const btns = document.querySelector('.header__btns')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        btns.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        btns.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
}

// Modal 

function bindModal(trigger, modal, close) {
    trigger = document.querySelectorAll(trigger),
      modal = document.querySelector(modal),
      close = document.querySelector(close)
  
    const body = document.body
    
    trigger.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault()
            modal.style.display = 'flex'
            body.classList.add('locked')
        });
    })
    close.addEventListener('click', () => {
      modal.style.display = 'none'
       body.classList.remove('locked')
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none'
         body.classList.remove('locked')
      }
    })
}

// Form

const phoneInputField = document.querySelector("#phone");
const nameInputField = document.querySelector("#name");
const submitBtn = document.querySelector(".btn-submit");
const errorMsg = document.querySelector(".error-msg");

const errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const reset = () => {
    phoneInputField.classList.remove("error");
    nameInputField.classList.remove('error');
    errorMsg.innerHTML = "";
    errorMsg.classList.add("hide");
};

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    reset();

    if (nameInputField.value) {
        nameInputField.classList.remove('error')
    } else {
        nameInputField.classList.add('error')
    }

    if (phoneInput.isValidNumber()) {
        phoneInputField.classList.remove('error')
    } else {
        phoneInputField.classList.add("error");
        const errorCode = phoneInput.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove("hide");
    }
})

// Functions

burgerMenu();
bindModal('.btn-active', '.modal', '.modal__close');

