// script.js

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const menuLinks = document.querySelectorAll('#mobile-menu a');

    hamburger.addEventListener('click', function () {
        mobileMenu.classList.toggle('menu-visible');
        mobileMenu.classList.toggle('menu-hidden');
    });

    closeMenu.addEventListener('click', function () {
        mobileMenu.classList.add('menu-hidden');
        mobileMenu.classList.remove('menu-visible');
    });

    // Close the mobile menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('menu-hidden');
            mobileMenu.classList.remove('menu-visible');
        });
    });

    // Close the mobile menu when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
            mobileMenu.classList.add('menu-hidden');
            mobileMenu.classList.remove('menu-visible');
        }
    });
});



const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});
