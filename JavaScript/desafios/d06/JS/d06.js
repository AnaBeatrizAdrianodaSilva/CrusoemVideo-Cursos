

function button () {
   var C =  window.prompt(`Digite uma temperatura em °C (Celcius)`)
   var K = C + 274
   var F = C * 1.8 + 32
   var temperaturas = window.document.getElementById('temp')
   temperaturas.innerHTML = `<h2>A temperatura de ${C}°C, corresponde a...</h2>`
   var kel = window.document.getElementById('k')
   kel.innerHTML = `<p show>${K}°K (Kelvin)</p>`
   var far = window.document.getElementById('f')
   far.innerHTML = `<p>${F}°F (Fahrenheit)</p>`
}