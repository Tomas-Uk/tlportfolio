/*
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("background");

function setGradient(){
    body.style.background =
        "linear-gradient(to right,"
        + color1.value
        + ", "
        + color2.value
        +")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient)
color2.addEventListener("input", setGradient)
*/




/* form controls*/
    window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above
        let form = document.getElementById("form");
        let status = document.getElementById("status");

        // Success and Error functions for after the form is submitted
        function success() {
            form.reset();
            status.innerHTML = "Thank you!";
        }
        function error() {
            status.innerHTML = "There was a problem!";
        }
        // handle the form submission event
        form.addEventListener("submit", function(ev) {
            ev.preventDefault();
            let data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });
    });

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

// Scrollplay
window.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
    });

});


/*BACK TO TOP*/
$(window).ready(scrollFunction)
let mybutton = document.getElementById("back-to-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}