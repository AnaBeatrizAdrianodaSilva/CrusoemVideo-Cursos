

function button() {
    var metros = window.prompt(`Digite uma distância em metros(m)`)
    var decametros = Number(metros / 10)
    var hectometros =Number( metros / 10 / 10)
    var quilometros = Number(metros / 10 / 10 / 10)
    var decimetros = Number(metros * 10)
    var centrimetros = Number(metros * 10 * 10)
    var milimetros = Number(metros * 10 * 10 * 10)
    var res = window.document.getElementById('m')
    m.innerHTML = `<strong>A distância de ${Number(metros)} metros, corresponde a...</strong>`
    km.innerHTML = `${quilometros} quilômetros (Km)`
    hm.innerHTML = `${hectometros} hectômetros (Hm)`
    dam.innerHTML = `${decametros} decâmetros (Dam)`
    dm.innerHTML = `${decimetros} decímetros (dm)`
    cm.innerHTML = `${centrimetros} centímetros (cm)`
    mm.innerHTML = `${milimetros} milimetros (mm)`

}