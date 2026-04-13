function showMore() {
    const gotToHomeDiv = document.getElementById('locais-mais-escolhidos');
    gotToHomeDiv.scrollIntoView({ behavior: 'smooth' });
}

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
}

function sortearSelecionados() {
    const checkboxes = document.querySelectorAll('.checkboxes input:checked');
    const selecionados = [];

    checkboxes.forEach(cb => {
        selecionados.push(cb.value);
    });

    if (selecionados.length === 0) {
        alert("Selecione pelo menos um país!");
        return;
    }

    const sorteado = selecionados[Math.floor(Math.random() * selecionados.length)];

    document.getElementById("resultado-sorteio").innerText = "🌍 Destino: " + sorteado;
}

function sortearTodos() {
    const todos = ["França", "Brasil", "Japão", "Itália", "Alemanha", "Espanha"];

    const sorteado = todos[Math.floor(Math.random() * todos.length)];

    document.getElementById("resultado-sorteio").innerText = "🌍 Destino: " + sorteado;
}
