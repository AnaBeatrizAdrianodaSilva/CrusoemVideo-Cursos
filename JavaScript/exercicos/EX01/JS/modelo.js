function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    var title = document.getElementById('title')

    if(hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manhã.png'
        document.body.style.background = '#FEC466'
        title.innerHTML = `<h1>Bom Dia!</h1>`
    } else if (hora >= 12 && hora <= 18) { 
        //Boa tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#C4591C'
        title.innerHTML = `<h1>Boa Tarde!</h1>`
    } else {
        //Boa noite!
        img.src = 'Noite.png'
        document.body.style.background = '#223740'
        title.innerHTML = `<h1>Boa Noite!</h1>`
    }
}

