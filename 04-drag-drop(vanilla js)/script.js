const zone1 = document.querySelector('.zone1')
const zone2 = document.querySelector('.zone2')
const item = document.querySelector('#item')




zone1.ondragover = allowDrop

function allowDrop(event){
    event.preventDefault()
 }


item.ondragstart = drag
function drag(event){

    event.dataTransfer.setData('id',event.target.id)

}



zone1.ondrop=drop

function drop(e){
  debugger
    let itemId = e.dataTransfer.getData('id')
   
     e.target.append(document.getElementById(itemId))
  }
 
  

  ///
  
zone2.ondragover = allowDrop2

function allowDrop2(event){
    event.preventDefault()
 }






zone2.ondrop=drop2

function drop2(e){
  debugger
    let itemId = e.dataTransfer.getData('id')
   
     e.target.append(document.getElementById(itemId))
  }


