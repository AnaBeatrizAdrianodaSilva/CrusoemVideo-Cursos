
function button() {
    var produto = window.prompt(`Qual é o produto que você está comprando?`)
    var preço = Number(window.prompt(`Qual é o preço de ${produto}`))
    var porc = 10
    var valor = (preço * porc) / 100
    var novo = preço - valor

    var h2 = window.document.getElementById('h2')
    h2.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`

    preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var p1 = window.document.getElementById('p1')
    p1.innerHTML = `<p>O preço original era ${preço.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`

    valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var p2 = window.document.getElementById('p2')
    p2.innerHTML = `<p>Você acaba de ganhar ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`

    novo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var p3 = window.document.getElementById('p3')
    p3.innerHTML = `<p>No fim, você vai pagar ${novo.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL'})} no produto ${produto}.</p>`
}