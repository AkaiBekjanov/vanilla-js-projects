const hamburgerMenu = document.querySelector('.hamburger-menu ')
const openMenu =document.querySelector('.bi-list')
const closeMenu =document.querySelector('.bi-x-lg')

hamburgerMenu.addEventListener('click',(e)=>{
  const key =e.target



   if(key.classList.contains('bi-list'))
   {
      
      openMenu.style.display='none'

    
      closeMenu.style.display='block'
      
   }else{
    openMenu.style.display='block'

    closeMenu.style.display='none'

   }
})