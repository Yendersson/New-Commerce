

/***************************************************BANNER FUNCTION************************************************************ */

let slideIndex = 1;
showSlides(slideIndex);

//  NEXT/PREVIOUS
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// THUMBNAIL IMAGE CONTROL
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Banner");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/**
 * back to top
 */

 const backTopBtn = document.querySelector("[data-back-top-btn]");

//  window.addEventListener("scroll", function () {
//    window.scrollY >= 100 ? backTopBtn.classList.add("active"): backTopBtn.classList.remove("active");
//  });