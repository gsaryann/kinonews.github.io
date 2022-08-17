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

$(".menu__small").on("click", function() {
    if (condition) {
        forward();
    } else {
        backward();
    }
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

radios = document.querySelectorAll(".news__content-switcher");
let block = document.querySelector(".notification");

radios.forEach((el) =>
    el.addEventListener("click", function(e) {
        radios.forEach((el) => {
            el.classList.remove('active')
        })
        block.classList.add("active");
        el.classList.add('active')
        $(".grup").html("");

        let gruvalue = el.value;
        if (document.body.scrollWidth <= 500) {
            block.style.width = '300px'
        }
        if (document.querySelector(".container").scrollWidth <= 760) {
            value = 2;
        } else {
            value = 1.7;
        }
        VK.Widgets.Group(
            " vk_groups ", {
                mode: 4,
                width: block.scrollWidth - 100,
                height: document.body.scrollHeight / (value * 1.7),
                wide: 1,
            },
            gruvalue
        );
    })
);

window.onload = function() {
    block.classList.add("active");
    if (document.body.scrollWidth <= 500) {
        block.style.width = '300px'
    }
    if (document.querySelector(".container").scrollWidth <= 760) {
        value = 1.2;
    } else {
        value = 1.7;
    }
    VK.Widgets.Group(
        " vk_groups ", {
            mode: 4,
            width: block.scrollWidth - 100,
            height: document.body.scrollHeight / (value * 1.5),
            wide: 1,
        },
        145404816
    );
};

function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    alert(input_values)
}
let button = document.querySelector('.btn');
button.addEventListener('click', handle);


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

//mobile

marrow.addEventListener('click', function() {
    mcontactBlock.classList.toggle('active')
})

mcontact.addEventListener('click', function() {
    mcontactBlock.classList.toggle('active')
})

mnews.addEventListener('click', function() {
    backward();
    setTimeout('document.getElementById("news").scrollIntoView()', 810);
})

mmailling.addEventListener('click', function() {
    backward();
    setTimeout('document.getElementById("mailling").scrollIntoView()', 810);
    mcontactBlock.classList.toggle('active')
})

mcontactLink.addEventListener('click', function() {
    backward();
    setTimeout('document.getElementById("contact").scrollIntoView()', 810);
    mcontactBlock.classList.toggle('active')
})
