

function button() {
    var funcionario = window.prompt(`Qual é o nome do funcionário?`)
    var salá = Number(window.prompt(`Qual é o salário de ${funcionario}?`))
    var porc = Number(window.prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`))

    var valor = (salá * porc) / 100
    var novo = salá + valor

    var p1 = window.document.getElementById('p1')
    p1.innerHTML = `<h2>${funcionario} recebeu um aumento salarial!</h2>`

    var p2 = window.document.getElementById('p2')
    p2.innerHTML = `<p>O salário atual era ${salá.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`

    var p3 = window.document.getElementById('p3')
    p3.innerHTML = `<p>Com um aumento de ${porc}%, salário vai aumentar ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`

    var p4 = window.document.getElementById('p4')
    p4.innerHTML = `<p>E a partir daí, ${funcionario} vai passar a ganhar ${novo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>`
}