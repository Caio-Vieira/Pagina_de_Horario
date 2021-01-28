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
        corpo.style.backgroundColor = '#e3be70'
        imagem.src = 'manha1.png'
        txt.innerHTML = `Agora são ${hora}:${minuto} horas, bom dia!` 
    }
    else if (hora>=12 && hora<=17){
        corpo.style.backgroundColor = '#dc8a50'
        imagem.src = 'tarde1.png'
        txt.innerHTML = `Agora são ${hora}:${minuto} horas, boa tarde!`
    }
    else{
        corpo.style.backgroundColor = '#0e1860'
        txt.innerHTML = `Agora são ${hora}:${minuto} horas, boa noite!`
    }  

}




