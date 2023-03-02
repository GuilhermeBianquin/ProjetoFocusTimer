import Controls from "./controls.js"
import Timer from "./timer.js"
import { element } from "./config.js"

const {
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
    tochange } = element
    
let minutes = Number(minutesDisplay.textContent)

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonPressCoffe,
    buttonPressFirePlace,
    buttonPressForest,
    buttonPressRain,
    buttonCoffe,
    buttonFirePlace,
    buttonForest,
    buttonRain
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    minutes,

})

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    controls.reset()
    timer.hold()
    
})

buttonStop.addEventListener('click', function(){
    controls.reset()
    timer.reset()
})

buttonForest.addEventListener('click', function(){
    const cardSoundForestSelected = buttonForest.classList.contains('ToChange')

    if (cardSoundForestSelected){
        stopAudios()
        initializeButtons()
    }else{
        buttonPressForest.play()
        buttonForest.classList.add('ToChange')
    }
})

buttonRain.addEventListener('click', function(){
    const cardSoundRainSelected = buttonRain.classList.contains('ToChange')

    if(cardSoundRainSelected){
        stopAudios()
        initializeButtons()
    }else{
        buttonPressRain.play()
        buttonRain.classList.add('ToChange')
    }
})

buttonCoffe.addEventListener('click', function(){
    const cardSoundCoffeSelected = buttonCoffe.classList.contains('ToChange')

    if(cardSoundCoffeSelected){
        stopAudios()
        initializeButtons()
    }else{
        buttonPressCoffe.play()
        buttonCoffe.classList.add('ToChange')
    }
})

buttonFirePlace.addEventListener('click', function(){
    const cardSoundFirePlaceSelected = buttonFirePlace.classList.contains('ToChange')

    if(cardSoundFirePlaceSelected){
        stopAudios()
        initializeButtons()
    }else{
        buttonPressFirePlace.play()
        buttonFirePlace.classList.add('ToChange')
    }
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

function stopAudios() {
    controls.stopAudios()
}

function initializeButtons() {
    controls.initializeButtons()
}