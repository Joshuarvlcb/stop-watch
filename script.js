//whenever we lap the the time stops and display the time we stopped then we click unpause it wil keep running in 
//the background

const seconds = document.querySelector('.seconds')
const miliseconds = document.querySelector('.miliseconds')


let milisecondsTime;
let counter = 0
let secondsCounter = 1
let state = true
let min = 1
const minutues = document.querySelector('.min')
const watch = function(){


    milisecondsTime = setInterval(function(){
        counter++
        miliseconds.textContent = ':' + counter

        if(counter == 100){
                if(secondsCounter < 10){
            seconds.textContent = '0' + secondsCounter++  + 's'
        }else{
            seconds.textContent = secondsCounter++ + 's'

        }
            counter = 0 
        }

        if(secondsCounter >= 60){
            minutues.textContent = '0' + min++ + ':'
            secondsCounter = 0
        }

        
        
    },10)

    start.classList.add('none')
    Stop.classList.remove('none')
}

start.addEventListener('click',watch)

Stop.addEventListener('click',() => {
        clearInterval(milisecondsTime)
        start.classList.remove('none')
        Stop.classList.add('none')        
    }
)
//lap should continue but when we click it  needs to stop on the current time we click it on but when we unclick it needs to
//still be running in the background

const lapContainer = document.querySelector('.lap-container')
lap.addEventListener('click', function(){
    let div = document.createElement('div')
    div.classList.add('lap')
    div.textContent = `${min - 1}:${secondsCounter - 1}:${counter}`
    lapContainer.appendChild(div)
})




$(function(){
let counter = 0

$("#click").on('click',function(){
 
if(secondsCounter <= 8 && secondsCounter !== 1){
    counter++
console.log(counter)
}else{
    return
}


        })





})