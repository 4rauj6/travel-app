function showMore() {
  const gotToHomeDiv = document.getElementById("locais-mais-escolhidos");
  gotToHomeDiv.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function openSidebar() {
  const openSidebarEvent = document.getElementById("sidebar-list");
  const sidebarMain = document.querySelector(".sidebar");
  const sidebarMenuButton = document.querySelector(".fa-bars, .fa-times");

  if (openSidebarEvent.style.display === "block") {
    openSidebarEvent.style.display = "none";
    sidebarMain.addEventListener('click', function() {
      sidebarMain.classList.remove('active');
    })
  } else {
    openSidebarEvent.style.display = "block";
    sidebarMain.addEventListener('click', function() {
      sidebarMain.classList.toggle('active');
    })
  }
  sidebarMenuButton.classList.toggle("fa-bars");
  sidebarMenuButton.classList.toggle("fa-times");
}

function openConfig(navegationElement) {
  const getDropdownMenu = navegationElement.parentElement.querySelector('.dropdown-menu, .dropdown-menu-sidebar');
  const getDropdownMenuContent = getDropdownMenu.querySelector('.dropdown-menu-content');
  const aLinkIcons = document.querySelector('.fa-chevron-down, .fa-times, .fa-chevron-up');

  if (getDropdownMenu.style.display === "block" || getDropdownMenuContent.style.display === "block") {
    getDropdownMenu.style.display = "none";
    getDropdownMenuContent.style.display = "none";
  } else {
    getDropdownMenu.style.display = "block";
    getDropdownMenuContent.style.display = "block";
  }

  if (aLinkIcons) {
    aLinkIcons.classList.toggle("fa-chevron-down");
    aLinkIcons.classList.toggle("fa-chevron-up");
  }
}

function changeTheme() {
  let darkModeToggle = document.body;
  darkModeToggle.classList.toggle("dark-mode");
}

function showPlacesPage(placeNameId) {
  const sectionsToHide = document.querySelectorAll(".homepage, .locais-page, .locais-descobrir, .footer-content");
  const targetPlaceState = document.querySelector(`.${placeNameId}-page`);
  const pageVisible = targetPlaceState.style.display === "block" || targetPlaceState.style.display === "flex";

  if (pageVisible) {
    targetPlaceState.style.display = "none";
    sectionsToHide.forEach(hideTheSections => {
      hideTheSections.style.display = "block";
    });
  } else {
    closePages();
    targetPlaceState.style.display = "block";
    sectionsToHide.forEach(hideTheSections => {
      hideTheSections.style.display = "none";
    });
  }

  window.scrollTo(0, 0);
}

function closePages() {
  const pages = document.querySelectorAll("[class$='-page']");
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

let slideStates = {
  "slide-barcelona": 1,
  "slide-tokyo": 1,
  "slide-paris": 1,
  "slide-rio": 1,
  "slide-rome": 1,
  "slide-munich": 1
};

showSlides(1, "slide-barcelona");
showSlides(1, "slide-tokyo");
showSlides(1, "slide-paris");
showSlides(1, "slide-rio");
showSlides(1, "slide-rome");
showSlides(1, "slide-munich");

function plusSlides(n, containerId) {
  showSlides((slideStates[containerId] += n), containerId);
}

function currentSlide(n, containerId) {
  showSlides((slideStates[containerId] = n), containerId);
}

function showSlides(n, containerId) {
  let i;
  let container = document.getElementById(containerId);
  let slides = container.getElementsByClassName("mySlides");
  let dots = container.getElementsByClassName("dot");

  if (n > slides.length) { slideStates[containerId] = 1; }
  if (n < 1) { slideStates[containerId] = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideStates[containerId] - 1].style.display = "block";
  dots[slideStates[containerId] - 1].className += " active";

  setTimeout(function () {
    plusSlides(1, containerId);
  }, 3000);
};
