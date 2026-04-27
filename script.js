function showMore() {
    const gotToHomeDiv = document.getElementById('locais-mais-escolhidos');
    gotToHomeDiv.scrollIntoView({ behavior: 'smooth' });
};

function openSidebar() {
    const openSidebarEvent = document.getElementById('sidebar-list');
    const sidebarMenuButton = document.querySelector('.fa-bars, .fa-times');

    if (openSidebarEvent.style.display === 'block') {
        openSidebarEvent.style.display = 'none';
    } else {
        openSidebarEvent.style.display = 'block';
    }
    sidebarMenuButton.classList.toggle('fa-bars');
    sidebarMenuButton.classList.toggle('fa-times');
};