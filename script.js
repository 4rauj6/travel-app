function showSidebar(){
    const showSiberToggle = document.getElementById("sidebar");
    const iconForBtn = document.getElementById("iconBtn");
    if(showSiberToggle.style.display === "none"){
        showSiberToggle.style.display = "block";
        iconForBtn.classList.replace("fa-bars", "fa-close");

    }else{
        showSiberToggle.style.display = "none";
        iconForBtn.classList.replace("fa-close", "fa-bars");
    }
}

function showMore() {
    const gotToHomeDiv = document.getElementById('locais-mais-escolhidos');
    gotToHomeDiv.scrollIntoView({ behavior: 'smooth' });
}
