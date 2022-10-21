const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
burger.addEventListener('click',(e)=>{

    e.currentTarget.classList.toggle('active')
    nav.classList.toggle('active')
})
