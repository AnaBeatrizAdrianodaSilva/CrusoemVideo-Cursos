
function button() {
    var a = window.prompt('Qual é o valor de a?')
    var b = window.prompt('Qual é o valor de b?')
    var c = window.prompt('Qual é o valor de c?')

    var delta = (b ** 2) - 4 * a * c

    var p1 = window.document.getElementById('p1')
    p1.innerHTML = `<h2>Resolvendo Bhaskara</h2>` 

    var p2 = window.document.getElementById('p2')
    p2.innerHTML = `<p>A equação atual é ${a}x² + ${b}x + ${c} = 0</p>`

    var p3 = window.document.getElementById('p3')
    p3.innerHTML = `<p>O cáculo realizado será &Delta; = ${b}² - 4 . ${a} . ${c}</p>`

    var p4 = window.document.getElementById('p4')
    p4.innerHTML = `<p>P valor calculado foi <mark>&Delta; = ${delta}</mark></p>`

}