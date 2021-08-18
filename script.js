window.onload = function () {

    let body = document.body
    let schedules = document.getElementById("schedules")
    var image = document.getElementById('period')

    morning(hoursFunction, minutesFunction)
    afternoon(hoursFunction, minutesFunction)
    night(hoursFunction, minutesFunction)


    function minutesFunction() {
        let minute = new Date().getMinutes()
        return minute < 10 ? minute = ('0' + minute) : minute
    }

    function hoursFunction() {
        let hour = new Date().getHours()
        return hour < 10 ? hour = ('0' + hour) : hour
    }


    setInterval(() => {
        morning(hoursFunction, minutesFunction)
        afternoon(hoursFunction, minutesFunction)
        night(hoursFunction, minutesFunction)
    }, 1000)


    function morning(hours, minutes) {


        if (hours() >= 5 && hours() <= 11) {
            body.style.backgroundColor = '#e3be70'
            image.src = 'morning.png'
            schedules.innerHTML = `Agora são ${hours()}:${minutes()}, bom dia!`
        }
    }

    function afternoon(hours, minutes) {

        if (hours() >= 12 && hours() <= 17) {
            body.style.backgroundColor = '#dc8a50'
            image.src = 'afternoon.png'
            schedules.innerHTML = `Agora são ${hours()}:${minutes()}, boa tarde!`
        }
    }

    function night(hours, minutes) {

        if (hours() >= 18 || hours() <= 4) {
            body.style.backgroundColor = '#0e1860'
            image.src = 'night.png'
            schedules.innerHTML = `Agora são ${hours()}:${minutes()}, boa noite!`
        }
        
    }

}