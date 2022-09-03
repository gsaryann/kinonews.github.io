let smallMenu = document.querySelector(".menu__small");
let condition = true;
let buttonLines = document.querySelectorAll(".stripe");

let arrow = document.querySelector('.arrow');
let marrow = document.querySelector('.marrow');
let contact = document.querySelector('.contact');
let mcontact = document.querySelector('.mcontact');
let contactLink = document.querySelector('.contact-link');
let mcontactLink = document.querySelector('.mcontact-link');
let mailling = document.querySelector('.mailling-link');
let mmailling = document.querySelector('.mmailling-link');
let contactBlock = document.querySelector('.contacts');
let mcontactBlock = document.querySelector('.mob-contacts');
let mnews = document.querySelector('.mnews');
let mfeedback = document.querySelector('.mfeedback');
let feedback = document.querySelector('.feedback');


$(".menu__small").on("click", function() {
    if (condition) {
        forward();

    } else {
        backward();
    }
});
$(document).ready(function() {
    $('.slider').bxSlider();
});

function forward() {
    buttonLines.forEach(function(el, i) {
        buttonLines[i].classList.toggle("active");
    });
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
    anime({
        targets: ".menu",
        translateX: ["-100%", "0"],
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false,
    });

    condition = false;
}

function backward() {
    document.body.style.overflowY = 'visible';
    buttonLines.forEach(function(el, i) {
        buttonLines[i].classList.toggle("active");
    });
    anime({
        targets: ".menu",
        translateX: ["0", "-100%"],
        easing: "easeInOutQuad",
        direction: "alternate",
        duration: 1000,
        loop: false,
    });

    condition = true;
}



arrow.addEventListener('click', function() {
    contactBlock.classList.toggle('active')
})

contact.addEventListener('click', function() {
    contactBlock.classList.toggle('active')
})

contactLink.addEventListener('click', function() {
    contactBlock.classList.toggle('active')
})

mailling.addEventListener('click', function() {
    contactBlock.classList.toggle('active')
})
feedback.addEventListener('click', function() {
    contactBlock.classList.toggle('active')
})


//mobile

marrow.addEventListener('click', function() {
    mcontactBlock.classList.toggle('active')
})

mcontact.addEventListener('click', function() {
    mcontactBlock.classList.toggle('active')
})

mnews.addEventListener('click', function() {
    backward();
    mcontactBlock.classList.toggle('active')
})

mmailling.addEventListener('click', function() {
    backward();
    mcontactBlock.classList.toggle('active')
})

mcontactLink.addEventListener('click', function() {
    backward();
    mcontactBlock.classList.toggle('active')
})

mfeedback.addEventListener('click', function() {
    backward();
    mcontactBlock.classList.toggle('active')
})