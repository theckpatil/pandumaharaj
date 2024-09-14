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

function events() {
  hamburger_menu.addEventListener("click", (e) => {
    big_wrapper.classList.toggle("active");
    e.stopPropagation(); // Prevents closing the menu immediately
  });

  // Hide the menu when clicking anywhere outside the links element
  document.addEventListener("click", (e) => {
    // Check if the big_wrapper is active and the click was outside the links element
    if (
      big_wrapper.classList.contains("active") &&
      !links.contains(e.target) &&
      e.target !== hamburger_menu // Ensure click is not on the hamburger menu itself
    ) {
      big_wrapper.classList.remove("active");
    }
  });

}

events();

/*==================== copyright year====================*/

var date = new Date();
var year = date.getFullYear();

document.getElementById("year").innerHTML = year;

// ===================== Link Smooth Scrolling =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const headerOffset = document.querySelector('header').offsetHeight; // Get navbar height dynamically
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});
