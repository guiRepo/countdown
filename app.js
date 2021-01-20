const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')



const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear


const getTimeUnity = unit => unit < 10 ? '0' + unit : unit  

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
    daysContainer.textContent = getTimeUnity(days)
    hoursContainer.textContent = getTimeUnity(hours) 
    minutesContainer.textContent = getTimeUnity(minutes) 
    secondsContainer.textContent = getTimeUnity(seconds) 
}

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime

    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60

    insertCountdownValues({days, hours, minutes, seconds})
}

setTimeout(()=> {
    spinnerLoading.remove()
}, 1000)
setInterval(updateCountdown, 1000)