const buttonPressForest = new Audio('Floresta.wav')
const buttonPressRain = new Audio('Chuva.wav')
const buttonPressCoffe = new Audio('Cafeteria.wav')
const buttonPressFirePlace = new Audio('Lareira.wav')

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

export const element = {
    buttonPressCoffe,
    buttonPressFirePlace,
    buttonPressRain,
    buttonPressForest,
    buttonPlay,
    buttonPause,
    buttonForest,
    buttonRain,
    buttonCoffe,
    buttonFirePlace,
    buttonStop,
    buttonPositive,
    buttonNegative,
    minutesDisplay,
    secondsDisplay,
    tochange
}