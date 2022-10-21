const gameDisplay = document.querySelector('.game')
let ceils = document.querySelectorAll('.ceil')
const btn = document.body.querySelector('.btn')
console.log(ceils)
//
let hod =0
let winningCases = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

const  hEvent = (e)=>{
    const key =e.target
    const keyValue = key.textContent
    hod++
    if(key.classList.contains('ceil'))
          {
          
            if(keyValue) return
            e.target.textContent =  hod%2 == 0 ? 'X' : 'Y'
    }
     
    return;
}
const startGame = ()=>{
    gameDisplay.style.cssText = `
       border:1px solid black
    ` 
    ceils.forEach(item=>item.style.cssText =`
    transition:display .4s;
    display:block;
  
    `)
    btn.style.cssText = `
       display:none;
      
    `
}

btn.addEventListener('click',startGame
)
gameDisplay.addEventListener('click',hEvent)
