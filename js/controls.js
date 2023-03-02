export default function Controls({
    buttonPlay,
    buttonPause,
    buttonPressCoffe,
    buttonPressFirePlace,
    buttonPressRain,
    buttonPressForest,
    buttonCoffe,
    buttonFirePlace,
    buttonForest,
    buttonRain
}){

    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }

    function stopAudios(){
        buttonPressForest.pause()
        buttonPressRain.pause()
        buttonPressCoffe.pause()
        buttonPressFirePlace.pause()
    }

    function reset(){
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function initializeButtons(){
        buttonForest.classList.remove('ToChange')
        buttonRain.classList.remove('ToChange')
        buttonCoffe.classList.remove('ToChange')
        buttonFirePlace.classList.remove('ToChange')
    }

    return{
        reset,
        play,
        stopAudios,
        initializeButtons
    }

}