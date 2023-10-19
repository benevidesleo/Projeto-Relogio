let digitalEl = document.querySelector('.digital')
let sEl = document.querySelector('.p_s')
let mEl = document.querySelector('.p_m')
let hEl = document.querySelector('.p_h')

function updateTime() {
    let nowTime = new Date()
    let hour = nowTime.getHours()
    let minute = nowTime.getMinutes()
    let second = nowTime.getSeconds()

    let secondDeg = ((360 / 60) * second) - 90
    let minuteDeg = ((360 / 60) * minute) - 90
    let hourDeg = ((360 / 12) * hour) - 90

    digitalEl.innerHTML = `${fixZero(hour)}: ${fixZero(minute)}: ${fixZero(second)}`
    sEl.style.transform = `rotate(${secondDeg}deg)`
    mEl.style.transform = `rotate(${minuteDeg}deg)`
    hEl.style.transform = `rotate(${hourDeg}deg)`
}

function fixZero(time) {
    if (time < 10) {
        return '0' + time
    } else {
        return time
    }
}

setInterval(updateTime, 1000)
updateTime()