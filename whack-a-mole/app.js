const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitposition
let currentTime = 20
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor((Math.random() * 9))]
    randomSquare.classList.add('mole')
    hitposition = randomSquare.id
}
squares.forEach(square => {
    square.addEventListener('mousedown',() => {
        if(square.id == hitposition){
            result++
            score.textContent = result
            hitposition = null
        }
    })
})
function moveMole(){
    timerId = setInterval(randomSquare, 800);
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Final result is ' + result)
    }

}
let countDownTimerId = setInterval(countDown,1000)