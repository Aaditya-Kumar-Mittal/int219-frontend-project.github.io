// Header Scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})


//Code to make the nav-link active when clicked 
// Get the current page URL
var url = window.location.href;

// Get all navigation links
var links = document.querySelectorAll('.navbar-nav .nav-link');

// Loop through each link
links.forEach(function (link) {
    // If the link's href matches the current page URL
    if (link.href === url) {
        // Add the active class
        link.classList.add('active');
    } else {
        // Remove the active class from other links
        link.classList.remove('active');
    }
});

// Owl Carousel
$(document).ready(function () {
    $(".client-slider-section").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});

