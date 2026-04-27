
let valorCompra = 100.00;
let codigoCliente = 2;

let valorFinal;


if (codigoCliente === 2) {

    valorFinal = valorCompra * 0.90;
    alert("Desconto de Funcionário aplicado (10%).");
} else if (codigoCliente === 3) {

    valorFinal = valorCompra * 0.95;
    alert("Desconto de Cliente VIP aplicado (5%).");
} else {

    valorFinal = valorCompra;
    alert("Cliente comum. Sem desconto aplicado.");
}

alert(`Valor original: R$ ${valorCompra.toFixed(2)}`);
alert(`Total a pagar: R$ ${valorFinal.toFixed(2)}`);