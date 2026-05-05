function showMore() {
  const gotToHomeDiv = document.getElementById("locais-mais-escolhidos");
  gotToHomeDiv.scrollIntoView({ behavior: "smooth" });
}

function openSidebar() {
  const openSidebarEvent = document.getElementById("sidebar-list");
  const sidebarMenuButton = document.querySelector(".fa-bars, .fa-times");

  if (openSidebarEvent.style.display === "block") {
    openSidebarEvent.style.display = "none";
  } else {
    openSidebarEvent.style.display = "block";
  }
  sidebarMenuButton.classList.toggle("fa-bars");
  sidebarMenuButton.classList.toggle("fa-times");
}

function showBarcelonaPage() {
  const getTrigger = document.querySelectorAll(
    ".homepage, .locais-page, .locais-descobrir, .footer-content",
  );
  const getPage = document.querySelector(".barcelona-page");

  if (getPage.style.display === "flex") {
    getPage.style.display = "none";
    getTrigger.forEach((section) => {
      section.style.display = "block";
    });
  } else {
    getPage.style.display = "block";
    getTrigger.forEach((section) => {
      section.style.display = "none";
    });
  }
}

function showTokyoPage() {
  const getTrigger = document.querySelectorAll(
    ".homepage, .locais-page, .locais-descobrir, .foot-content",
  );
  const getPage = document.querySelector(".tokyo-page");

  if (getPage.style.display === "flex") {
    getPage.style.display = "none";
    getTrigger.forEach((section) => {
      section.style.display = "block";
    });
  } else {
    getPage.style.display = "block";
    getTrigger.forEach((section) => {
      section.style.display = "none";
    });
  }
}

function closePages() {
  const pages = document.querySelectorAll(".barcelona-page, .tokyo-page");
  const sections = document.querySelectorAll(
    ".homepage, .locais-page, .locais-descobrir, .footer-content",
  );

  pages.forEach((page) => {
    page.style.display = "none";
  });

  sections.forEach((section) => {
    section.style.display = "";
  });
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
