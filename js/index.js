const buttonPressForest = new Audio('Floresta.mp3')
const buttonPressRain = new Audio('Chuva.mp3')
const buttonPressCoffe = new Audio('Cafeteria.mp3')
const buttonPressFirePlace = new Audio('Lareira.mp3')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffe = document.querySelector('.coffe')
const buttonFirePlace = document.querySelector('.fireplace')
const buttonStop = document.querySelector('.stop')
const buttonPositive = document.querySelector('.positive')
const buttonNegative = document.querySelector('.negative')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const tochange = document.querySelector('.ToChange')
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut


function resetControls(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown(){
    timerTimerOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        secondsDisplay.textContent = "00"
        
        if (minutes <= 0){
            
            resetControls()
            return
        }

        if( seconds <= 0){
            seconds = 2

            minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

        
        countdown()
    }, 1000)
}

function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimerOut)
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countdown()
})

buttonPause.addEventListener('click', function(){
    resetControls()
    clearTimeout(timerTimerOut)
})

buttonStop.addEventListener('click', function(){
    resetControls()
    resetTimer()
})

buttonForest.addEventListener('click', function(){
    buttonForest.classList.add('ToChange')
    buttonRain.classList.remove('ToChange')
    buttonCoffe.classList.remove('ToChange')
    buttonFirePlace.classList.remove('ToChange')
    buttonPressForest.play()
})


buttonRain.addEventListener('click', function(){
    buttonRain.classList.toggle('ToChange')
    buttonForest.classList.remove('ToChange')
    buttonCoffe.classList.remove('ToChange')
    buttonFirePlace.classList.remove('ToChange')
    buttonPressRain.play()
})

buttonCoffe.addEventListener('click', function(){
    buttonCoffe.classList.toggle('ToChange')
    buttonForest.classList.remove('ToChange')
    buttonRain.classList.remove('ToChange')
    buttonFirePlace.classList.remove('ToChange')
    buttonPressCoffe.play()
})

buttonFirePlace.addEventListener('click', function(){
    buttonFirePlace.classList.toggle('ToChange')
    buttonForest.classList.remove('ToChange')
    buttonRain.classList.remove('ToChange')
    buttonCoffe.classList.remove('ToChange')
    buttonPressFirePlace.play()
})


buttonPositive.addEventListener('click', function(){
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
    minutes = minutesDisplay.textContent
})

buttonNegative.addEventListener('click', function(){
    minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5
    minutesDisplay.textContent = String(minutesDisplay.textContent).padStart(2, "0")
    minutes = minutesDisplay.textContent
})
