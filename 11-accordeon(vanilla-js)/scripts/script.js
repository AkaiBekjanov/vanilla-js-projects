let boxes = document.querySelectorAll('.box')

boxes.forEach(item=>{
    item.addEventListener('click',handleBox)
})

function handleBox(e){
    e.preventDefault()

    let box = e.target.closest('.box')
    console.log('hi')
    let content = e.target.nextElementSibling

    box.classList.toggle('active')

    if(box.classList.contains('active')){
        content.style.maxHeight = content.scrollHeight + 'px'
      
    }

    else{
        content.style.maxHeight = 0
    }

}

