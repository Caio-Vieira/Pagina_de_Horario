function hora () {
    let corpo = document.body
    let data = new Date() 
    let minuto = data.getMinutes()
    let hora = data.getHours()
    let txt = document.getElementsByTagName('p')[0]
    var imagem = document.getElementById('periodo')

    if (minuto < 10){
        minuto = ('0' + minuto)
    }
   
    if(hora >= 5 && hora<=11){
        corpo.style.backgroundColor = '#c5c346'
        imagem.src = 'manha1.png'
        txt.innerHTML = `Agora são ${hora}:${minuto} horas, bom dia!` 
    }
    else if (hora>=12 && hora<=17){
        corpo.style.backgroundColor = '#dc8536'
        imagem.src = 'tarde1.png'
        txt.innerHTML = `Agora são ${hora}:${minuto} horas, boa tarde!`
    }
    else{
        corpo.style.backgroundColor = '#1e3772'
        txt.innerHTML = `Agora são ${hora}:${minuto} horas, boa noite!`
    }  

}




