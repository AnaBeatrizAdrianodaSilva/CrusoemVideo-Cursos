
var dolar = window.prompt(`Antes de mais nada. Quanto está a cotação do dólar agora?`)

function button() {
    var reais = window.prompt(`Quantos R$ você tem na carteira`)
    var conta = dolar * reais
    conta.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    var vl = window.document.getElementById('valor')
    vl.innerHTML = `<p>Você podera comprar ${conta.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}</p>`
}