function carregar() {
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("imagem")
  var data = new Date()
  var hora = data.getHours()

  if (hora >= 0 && hora < 12) {
    img.src = 'assets/foto-manha.png'
    document.body.style.background = "#FFC26C"
    msg.innerHTML = `Agora são ${hora} horas. <br> Bom dia!`
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'assets/foto-tarde.png'
    document.body.style.background = "#c0d8d8"
    msg.innerHTML = `Agora são ${hora} horas. <br> boa tarde!`
  } else {
    img.src = 'assets/foto-noite.png'
    document.body.style.background = "#203f54"
    msg.innerHTML = `Agora são ${hora} horas. <br> boa noite!`

  }
}