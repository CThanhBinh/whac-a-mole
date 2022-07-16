const score =document.querySelector('#score')
const timeLeft =document.querySelector('#timeLeft')

let reachScore = 0
let time = 3

const setTime = setInterval(()=>{
    time --
    timeLeft.innerText = time  
},1000)

function ranFunc(){

    const num = Math.ceil(Math.random()*9)
    const square = document.querySelector(`div[id='${num}']`)
    square.classList.add('mole')

    function reset(){
        square.classList.remove('mole')
        square.removeEventListener('click',removefunc)
        ranFunc()
    }
    const removefunc = ()=>{
        clearTimeout(timeOut)
        reachScore ++
        score.innerText = reachScore 
        reset()
    }

    square.addEventListener('click',removefunc)

    const timeOut = setTimeout( reset ,1000)

    if(time === 0){
        clearInterval(setTime)
        clearTimeout(timeOut)
        square.removeEventListener('click',removefunc)
        setTimeout(()=>{
            alert(`GAME OVER. Your Score is ${reachScore}`)
        },500)
    }
}
ranFunc()
