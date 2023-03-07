const slides = document.querySelectorAll('.slide')
slides.forEach((slide)=>{
    slide.addEventListener('click',()=>{

        clearAllActives()
        slide.classList.add('active')
       console.log(slide)
    })
})

function clearAllActives(){
    for(let slide of slides){
        slide.classList.remove('active')
    }
}