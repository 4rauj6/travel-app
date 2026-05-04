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

function showBarcelonaPage() {
    const getTrigger = document.querySelectorAll('.homepage, .locais-page, .locais-descobrir, .tokyo-page, .footer-content');
    const getPage = document.querySelector('.barcelona-page');

    if (getPage.style.display === 'flex') {
        getPage.style.display = 'none';
        getTrigger.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        getPage.style.display = 'block';
        getTrigger.forEach(section => {
            section.style.display = 'none';
        });
    }
}

function showTokyoPage() {
    const getTrigger = document.querySelectorAll('.homepage, .locais-page, .locais-descobrir, .barcelona-page');
    const getPage = document.querySelector('.tokyo-page');

    if (getPage.style.display === 'flex') {
        getPage.style.display = 'none';
        getTrigger.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        getPage.style.display = 'flex';
        getTrigger.forEach(section => {
            section.style.display = 'none';
        });
    }

}


function closePages() {
    const getTrigger = document.querySelectorAll('.homepage, .locais-page, .locais-descobrir');
    const getPage = document.querySelector('.barcelona-page, .tokyo-page');

    if (getPage.style.display = 'none') {
        getTrigger.forEach(section => {
            section.style.display = '';
        });
    } else {
        getPage.style.display = 'flex';
    };
}
