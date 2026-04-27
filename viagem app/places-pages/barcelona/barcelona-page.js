function knowMore() {
    const gotToHomeDiv = document.getElementById('get-section');
    gotToHomeDiv.scrollIntoView({ behavior: 'smooth' });
};

function addToWishlist(localNome){
    const wishlistToggle = JSON.parse(localStorage.getItem('wishlist-data')) || [];

    if(!wishlistToggle.includes(localNome)){
        wishlistToggle.push(localNome);
        localStorage.setItem('wishlist-data', JSON.stringify(wishlistToggle));

        const wishlistAlert = wishlistToggle.join('\n');

        alert("Este item foi adicionado a sua lista de desejos!\nSua Lista: \n\n" + wishlistAlert);
    }else{
        const wishlistOverall = wishlistToggle.map((local, i) => `${i + 1} - ${local}`).join('\n');

        let userAnswer = prompt(
            "Esta item" + localNome + "já está na sua lista de desejos\n\n" +
            "Sua lista de desejos atual: \n" + wishlistOverall +
            "\nDeseja remove-ló?\n1 - Sim\n2 - Não"
        );

        if(userAnswer === "1") {
            let searchIndex = wishlistToggle.indexOf(localNome);

            if(searchIndex !== -1) {
                let deleteItem = wishlistToggle.splice(searchIndex, 1);

                localStorage.setItem('wishlist-data', JSON.stringify(wishlistToggle));

                if(wishlistToggle.length === 0){
                    alert("O item: " + deleteItem + "foi excluido com sucesso.\nSua lista de está vazia agora");
                }else{
                    alert("O item: " + deleteItem + "foi excluído com sucesso. Sua lista atualizada: \n" + wishlistToggle.join("\n"));
                }
            }
        }else{
            alert("Operação cancelada");
        }
    }
}