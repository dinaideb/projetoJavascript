function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML =`agora são <strong>${hora} horas.</strong>`

if( hora >= 0 && hora < 12){
    img.src = 'fotodia.png'
    document.body.style.backgroundColor = '#e2cd9f'
} else if(hora >= 12 && hora <= 18){
 img.src = 'fototarde.png'
    document.body.style.backgroundColor = '#EEDD82'
} else {
    img.src = 'fotonoite.png'
    document.body.style.backgroundColor = '#6E7B8B'
}
}
