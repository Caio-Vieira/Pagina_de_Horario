window.onload = function(){
   
    let body = document.body
    let date = new Date() 
    let minute = date.getMinutes()
    let hour = date.getHours()
    let txt = document.getElementsByTagName('p')[0]
    var image = document.getElementById('periodo')
    
    minute < 10 ? minute = ('0' + minute) : minute
    hour < 10 ? hour = ('0' + hour) : hour
   
    if(hour >= 5 && hour <= 11){
        body.style.backgroundColor = '#e3be70'
        image.src = 'manha1.png'
        txt.innerHTML = `Agora são ${hour}:${minute}, bom dia!` 
    }
    else if (hour >= 12 && hour <= 17){
        body.style.backgroundColor = '#dc8a50'
        image.src = 'tarde1.png'
        txt.innerHTML = `Agora são ${hour}:${minute}, boa tarde!`
    }
    else{
        body.style.backgroundColor = '#0e1860'
        txt.innerHTML = `Agora são ${hour}:${minute}, boa noite!`
    }  

}


    





