function showMore() {
    const gotToHomeDiv = document.getElementById('locais-mais-escolhidos');
    gotToHomeDiv.scrollIntoView({ behavior: 'smooth' });
}


 function toggleMenu(){
  const menu = document.getElementById("nav-list");
    menu.classList.toggle("active");
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
