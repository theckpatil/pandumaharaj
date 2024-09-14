let i = 0; // current slide
let j = 4; // total slides

const images = document.querySelectorAll(".image-container img");
const slideNum = document.querySelector(".slide-number");
  slideNum.innerHTML = `${i + 1} of ${j}`;

function next() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i + 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  slideNum.innerHTML = `${i + 1} of ${j}`;
}

function prev() {
  document.getElementById("content" + (i + 1)).classList.remove("active");
  i = (j + i - 1) % j;
  document.getElementById("content" + (i + 1)).classList.add("active");
  slideNum.innerHTML = `${i + 1} of ${j}`;
}

// To change the images dynamically every 6 Secs
setInterval(function() {
  next();
}, 6000)


/*==================== Larg Screen gallary Modal====================*/

const largImages = document.querySelectorAll(".pmsimg .img"); // largImages For Laptop & PC Big Screen
const lightbox = document.querySelector(".lightbox");
const closeImgBtn = lightbox.querySelector(".close-icon");
const headerText = lightbox.querySelector("span");

largImages.forEach((img) => {
  // Calling showLightBox function with passing clicked img src as argument
  img.addEventListener("click", () =>
    showLightbox(img.querySelector("img").src, img.querySelector("img").alt)
  );
});

const showLightbox = (img, alt) => {
  // Showing lightbox and updating img source
  lightbox.querySelector("img").src = img;
  lightbox.querySelector("img").alt = alt;
  lightbox.classList.add("show");
  headerText.innerHTML = alt;
  document.body.style.overflow = "hidden";
};

closeImgBtn.addEventListener("click", () => {
  // Hiding lightbox on close icon click
  lightbox.classList.remove("show");
  document.body.style.overflow = "auto";
});