// DOM
let positon=0
const slidesToShow =3
const slidesToScrool=1
const container = document.querySelector('.slider-container')

const track = document.querySelector('.slider-track')
const item = document.querySelectorAll('.slider-item')
const itemsCount = item.length
const btnPrev = document.querySelector('.btn-prev')
const itemWidth =parseInt(getComputedStyle(container).maxWidth)/slidesToShow
console.log(itemWidth)
const btnNext = document.querySelector('.btn-next')
const movePosition = slidesToScrool*itemWidth




item.forEach(element => {
  
    element.style.minWidth = `${itemWidth}px`
}
);


//EVENTS
btnNext.addEventListener('click',()=>{
    const itemsLeft = itemsCount-(Math.abs(positon)+slidesToShow*itemWidth)/itemWidth
    positon -= itemsLeft >= slidesToScrool ? movePosition : itemsLeft*itemWidth
    
    setPosition()
   
})
btnPrev.addEventListener('click',()=>{
    const itemsLeft =Math.abs(positon)/itemWidth
    positon +=itemsLeft >= slidesToScrool ? movePosition : itemsLeft*itemWidth
    setPosition()
    
})

const setPosition= ()=>{
    track.style.transform = `translateX(${positon}px)`
    positon ===0 ? btnPrev.disabled = true : btnPrev.disabled = false
    positon <= -(itemsCount-slidesToShow)*itemWidth ?  btnNext.disabled = true : btnNext.disabled = false
}


const Me =()=> { 

    return new Promise((resolve,reject)=>{
    if(3<5){
        resolve('yes')
    }
    else{
        reject('no')
    }
})} 
   

console.log(Me().then(m=>m))


  