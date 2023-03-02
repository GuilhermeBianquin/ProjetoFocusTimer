export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    minutes,
}){

    let timerTimerOut

    function updateTimerDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset(){
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimerOut)
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
                seconds = 60

                minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
            }
            
            secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

            
            countdown()
        }, 1000)
    }

    function hold(){
        clearTimeout(timerTimerOut)
    }

    return{
        countdown,
        reset,
        updateTimerDisplay,
        hold
    }
}