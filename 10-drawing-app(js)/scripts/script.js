// const cvs = document.querySelector('#cvs')
// const ctx = cvs.getContext('2d')

let inputColor = document.body.querySelector('.color-list')
console.log(inputColor.value)
let btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
    console.log(inputColor)
    document.querySelector('.app__cl--items.color').style.backgroundColor = inputColor.value
})