// Listas sempre começam do 0.
const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Salvador`
);

// Inserindo um item na lista. 
listaDeDestinos.push(`Curitiba`);

// Retirando um item da lista. Primeiro a posição e depois a quantidade de itens. No caso, retiramos Rio de Janeiro.
listaDeDestinos.splice(1,1);

// Exibindo apenas um elemento da lista. No caso, após a exclusão do Rio de Janeiro, estamos exibindo o item da posição 2, Curitiba.
console.log(listaDeDestinos[2]);

console.log(listaDeDestinos);