// Select The Elements
var toggle_switch;
var toggle_btn;
var big_wrapper;
var hamburger_menu;

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 30) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== Mobile Menu====================*/
big_wrapper = document.querySelector(".big-wrapper");
hamburger_menu = document.querySelector(".hamburger-menu");
links = document.querySelector(".links");
language_li = document.querySelector(".dropdown"); // Select the Language dropdown li

function events() {
  hamburger_menu.addEventListener("click", (e) => {
    big_wrapper.classList.toggle("active");

     // If the hamburger menu is clicked and the nav is closed, also close the dropdown
     if (!big_wrapper.classList.contains("active")) {
      language_li.classList.remove("show"); // Ensure the language dropdown is hidden
    }

    e.stopPropagation(); // Prevents closing the menu immediately
  });

  // Toggle the language dropdown when clicking the "Language" li
  language_li.addEventListener("click", function(e) {
    e.stopPropagation(); // Prevent event bubbling
    toggleDropdown();
  });

  function toggleDropdown() {
    language_li.classList.toggle("show"); // Toggle the 'show' class
    console.log('Dropdown toggled:', language_li.classList.contains('show')); // Debugging: Check if 'show' class is applied
  }
  // Hide the menu when clicking anywhere outside the relevant elements
  document.addEventListener("click", (e) => {
    // Check if the menu is active and the click is outside the menu and its items
    if (
      big_wrapper.classList.contains("active") &&
      e.target !== hamburger_menu && // Ensure the click is not on the hamburger menu itself
      !language_li.contains(e.target) // Ensure the click is not inside the Language dropdown
    ) {
      big_wrapper.classList.remove("active");
      language_li.classList.remove("show"); // Also close the language dropdown
    }
  });
}

events();

/*==================== copyright year====================*/

var date = new Date();
var year = date.getFullYear();

document.getElementById("year").innerHTML = year;

// ===================== Link Smooth Scrolling =================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const headerOffset = document.querySelector("header").offsetHeight; // Get navbar height dynamically
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const languageLi = document.querySelector(".dropdown");

//   // Add click event for Language li (Prevent closing of navbar)
//   languageLi.addEventListener("click", function (event) {
//     event.stopPropagation(); // Prevent event from bubbling up
//     this.classList.toggle("show"); // Toggle the dropdown menu
//   });
// });
