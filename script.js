// Header
// dropdown menu other navigation
const dropdown = document.querySelector('.dropdown');
const dropdownx = dropdown.getElementsByTagName('a')[0];
const ddkonten = dropdown.querySelector('.dropdown-konten');
dropdownx.addEventListener('click', function () {
  ddkonten.classList.toggle('showdd');
});

// slidemenu mobile intraction burger
const burgerM = document.querySelector('.menu-toggle');
const navslide = document.getElementsByTagName('nav')[0];
burgerM.addEventListener('click', function () {
  navslide.classList.toggle('slider');
});

// x header

// menu slide
let slideIndex = 1;
showSlides(slideIndex);

//  next
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// previous
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  let captionText = document.getElementById('caption');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
