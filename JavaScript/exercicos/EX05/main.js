let number = document.querySelector('#number');
let list = document.querySelector('select#list');
let val = [];

function addNumberToAList() {
    
    val.push(Number(number.value));
    let item = document.createElement('option');
    item.text = `Número ${number.value} adicionado`;
    // item.text = "Número " + number.value + " adicionado";
    list.appendChild(item); // PORRA DE appendChild NÃO FUNCIONA, O QUE NÃO FAZ O MENOR SENTIDO

}


// Função que pega o valor do input do número entre 1 e 100

    // Pegar o valor do input

    // Adiciona na div

    // Verifica se já tem o mesmo número



// Função de finalização que mostra alguns dados com base no que tem dentro da div

    // Mostrar na tela algumas informações

        // Quantos números foram cadastrados

        // O maior número cadastrado

        // O menor número cadastrado

        // A soma de todos os números cadastrados

        // A média de todos os números cadastrados




// Extra

// Função que limpa tudo