function showMore() {
  const gotToHomeDiv = document.getElementById("locais-mais-escolhidos");
  gotToHomeDiv.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function openSidebar() {
  const sidebarMain = document.querySelector(".sidebar");
  const openSidebarEvent = document.getElementById("sidebar-list");
  const sidebarMenuButton = document.querySelector(".fa-bars, .fa-times");

  if (sidebarMain.classList.contains('sidebar-open-anima')) {
    sidebarMain.classList.remove('sidebar-open-anima');
    sidebarMain.classList.add('sidebar-close-anima');
    
    setTimeout(() => {
        openSidebarEvent.style.display = "none";
    }, 300); 
  } else {
    openSidebarEvent.style.display = "block";
    sidebarMain.classList.remove('sidebar-close-anima');
    sidebarMain.classList.add('sidebar-open-anima');
  }

  sidebarMenuButton.classList.toggle("fa-bars");
  sidebarMenuButton.classList.toggle("fa-times");
}

function openConfig(navegationElement) {
  const getDropdownMenu = navegationElement.parentElement.querySelector('.dropdown-menu, .dropdown-menu-sidebar');
  const getDropdownMenuContent = getDropdownMenu.querySelector('.dropdown-menu-content');

  if (getDropdownMenu.style.display === "block" || navegationElement.classList.contains('active-anima')) {
      getDropdownMenu.style.display = "none";
      getDropdownMenuContent.style.display = "none";
      navegationElement.classList.remove('active-anima');
      navegationElement.classList.add('close-anima');
  } else {
      getDropdownMenu.style.display = "block";
      getDropdownMenuContent.style.display = "block";
      navegationElement.classList.remove('close-anima');
      navegationElement.classList.add('active-anima');
      setTimeout(() => {
        getDropdownMenuContent.style.transition = "opacity 0.3s";
        getDropdownMenuContent.style.opacity = "1";
      }, 10)
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
  "slide-munich": 1,
  "slide-marselle": 1,
  "slide-gramado": 1
};

showSlides(1, "slide-barcelona");
showSlides(1, "slide-tokyo");
showSlides(1, "slide-paris");
showSlides(1, "slide-rio");
showSlides(1, "slide-rome");
showSlides(1, "slide-munich");
showSlides(1, "slide-marselle");
showSlides(1, "slide-gramado");

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

const wishlistBtn = document.querySelectorAll('.add-to-wishlist');


wishlistBtn.forEach((wishlistBtn) => {
  let btnAlreadyClicked = false;

  wishlistBtn.addEventListener('click', function (){
    if(!btnAlreadyClicked){
      Swal.fire({
        title: 'Adicionado',
        titleColor: 'orange',
        text: 'Esse item foi adicionado com sucesso na sua lista de desejos',
        icon: 'success'
      });
      btnAlreadyClicked = true;
    } else {
      Swal.fire({
        toast: true,
        position: 'top',
        title: 'Atenção',
        text: 'Você já adicionou este item anteriormente.',
        icon: 'info',
        showConfirmButton: false,
        timer: 1000
      });
    }
  });  
})

const ratingBtn = document.querySelectorAll('.rating-place');

ratingBtn.forEach((ratingBtn) => {
  let ratBtnAlreadyClicked = false;
  if (ratingBtn) {
    ratingBtn.addEventListener('click', function() {
      if (ratBtnAlreadyClicked) {
        Swal.fire({
          toast: true,
          position: 'top',
          title: 'Você já enviou sua avaliação!',
          icon: 'info',
          showConfirmButton: false,
          timer: 3000
        });
        return; 
      }
      
      const darkModeActive = document.body.classList.contains('dark-mode');
      
      Swal.fire({
        title: 'Avalie sua experiência neste local',
        background: darkModeActive ? '#2d2d2d' : '#fff',
        color: darkModeActive ? '#fff' : '#545454',
        html: `
          <div class="rating-container">
            <input type="radio" id="star1" name="rating" value="1"/><label for="star1">1</label>
            <input type="radio" id="star2" name="rating" value="2"/><label for="star2">2</label>
            <input type="radio" id="star3" name="rating" value="3"/><label for="star3">3</label>
            <input type="radio" id="star4" name="rating" value="4"/><label for="star4">4</label>
            <input type="radio" id="star5" name="rating" value="5"/><label for="star5">5</label>
          </div> 
        `,
        confirmButtonText: 'Enviar',
        confirmButtonColor: darkModeActive ? 'orange' : '#3085d6',
        preConfirm: () => {
          const ratingCheck = Swal.getPopup().querySelector('input[name="rating"]:checked');
          if (!ratingCheck) {
            Swal.showValidationMessage('Por favor, dê uma nota para continuar');
          }
          return ratingCheck ? ratingCheck.value : null;
        }
      }).then((result) => {
        if (result.isConfirmed) {
          ratBtnAlreadyClicked = true;
  
          Swal.fire({
            title: 'Obrigado pelo seu voto!',
            text: `Sua nota foi: ${result.value} estrelas`,
            icon: 'success',
            background: darkModeActive ? '#2d2d2d' : '#fff',
            color: darkModeActive ? '#fff' : '#545454',
            confirmButtonColor: darkModeActive ? 'orange' : '#3085d6',
          });
        }
      });
    });
  }
})

const placesDatabase = [
  {nome: 'Paris', id: 'paris-page'},
  {nome: 'Rio', id: 'rio-page'},
  {nome: 'Tokyo', id: 'tokyo-page'},
  {nome: 'Roma', id: 'rome-page'},
  {nome: 'Munique', id: 'munich-page'},
  {nome: 'Gramado', id: 'gramado-page'},
  {nome: 'Marselle', id: 'marselle-page'},
  {nome: 'Barcelona', id: 'barcelona-page'}
];
const searchInputValue = document.getElementById('query');
const resultListvalue = document.getElementById('search-results');

searchInputValue.addEventListener('input', (e) => {
  const allToLowerCase = e.target.value.toLowerCase();
  resultListvalue.innerHTML = '';

  if (allToLowerCase.length > 0) {
      const filterSearch = placesDatabase.filter(local => 
        local.nome.toLowerCase().includes(allToLowerCase)
    );

    filterSearch.forEach(local => {
      const newDiv = document.createElement('div');
      newDiv.classList.add('search-result-value');
      newDiv.textContent = local.nome;


      newDiv.addEventListener('click', () => {
        goToPage(local.id);
        searchInputValue.value = '';
        resultListvalue.innerHTML = '';
      });
      resultListvalue.appendChild(newDiv);
    });
  }
});

const placesDatabaseMobile = [
  {nome: 'Paris', id: 'paris-page'},
  {nome: 'Rio', id: 'rio-page'},
  {nome: 'Tokyo', id: 'tokyo-page'},
  {nome: 'Roma', id: 'rome-page'},
  {nome: 'Munique', id: 'munich-page'},
  {nome: 'Gramado', id: 'gramado-page'},
  {nome: 'Marselle', id: 'marselle-page'},
  {nome: 'Barcelona', id: 'barcelona-page'}
];

const mobileSearchInput = document.getElementById('mobile-sb-query');
const mobileResultList = document.getElementById('mobile-search-results');

mobileSearchInput.addEventListener('input', (e) => {
  const allToLowerCase = e.target.value.toLowerCase();
  mobileResultList.innerHTML = '';

  if(allToLowerCase.length > 0) {
    const mobileFilter = placesDatabaseMobile.filter(local => 
      local.nome.toLowerCase().includes(allToLowerCase)
    );

    mobileFilter.forEach(local => {
      const newDivMobile = document.createElement('div');
      newDivMobile.classList.add('search-mobile-results');
      newDivMobile.textContent = local.nome;
      
      newDivMobile.addEventListener('click', () => {
        goToPage(local.id);
        mobileSearchInput.value = '';
        mobileResultList.innerHTML = '';
      });
      mobileResultList.appendChild(newDivMobile);
    });
  }
});

function goToPage(idFromPages){
  document.querySelectorAll('section').forEach(secs => {
    secs.style.display = 'none';
  });

  const targetView = document.querySelector(`.${idFromPages}`);
  const footer = document.querySelector('.footer-content');


  if(targetView){
    targetView.style.display = 'block';
  }

  if(footer){
    footer.style.display = 'none';
  }

  window.scrollTo(0,0);
}


function openSearchBox(){
  const inputOnMobile = document.querySelector('.mobile-sb-input');
  const overlayBoxMobile = document.getElementById('overlay');
  const container = document.querySelector('.searchbar-mobile');

  inputOnMobile.style.display = 'block';
  container.classList.add('active');
  overlayBoxMobile.classList.add('active');  
  setTimeout(() => inputOnMobile.focus(), 100);

  document.body.style.overflow = 'hidden';
}

function closeSearchBox() {
  const inputOnMobile = document.querySelector('.mobile-sb-input');
  const overlayBoxMobile = document.getElementById('overlay');
  const container = document.querySelector('.searchbar-mobile');

  inputOnMobile.style.display = 'none';
  container.classList.remove('active');
  overlayBoxMobile.classList.remove('active');

  document.body.style.overflow = 'auto';
}
