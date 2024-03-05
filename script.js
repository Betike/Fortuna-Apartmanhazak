document.addEventListener('scroll', () => {
  const header = document.querySelector('header');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  }
  else {
    header.classList.remove('scrolled')
  }
});

let currentFullImage = null;

function prevFullImg() {
  if (currentFullImage.previousElementSibling !== null) {
    let prevImg = currentFullImage.previousElementSibling;
    openFullImg(prevImg, prevImg.src);
  }
}

function openFullImg(img, src) {
  let modal = document.getElementById('fullImgBox');
  let modalImg = document.getElementById('fullImg');

  console.log(img);

  currentFullImage = img;


  modal.style.display = "flex";
  modalImg.src = src;
}

function closeFullImg() {
  let modal = document.getElementById('fullImgBox');
  modal.style.display = "none";
}

function nextFullImg() {
  if (currentFullImage.nextElementSibling !== null) {
    let nextImg = currentFullImage.nextElementSibling;
    openFullImg(nextImg, nextImg.src);
  }
}

let bars = document.querySelector('.bars-icon');
let downNav = document.querySelector('.down-nav');
let navLinks = document.querySelectorAll('.down-nav .nav-link')

bars.addEventListener('click', () => {
  downNav.classList.toggle('active');
  navLinks.forEach(e => e.classList.toggle('active'))
  navLinks.forEach(e => e.classList.add('animate__animated', `animate__${e.dataset.scrollAnimation}`))
});