const menuButton = document.querySelector(".navMobileBtn");
const mobileHeaderArea = document.querySelector(".mobile-header-menu")
const barLink = document.querySelector('.barLink')
const container = document.querySelector('.container')


menuButton.addEventListener('click', ()=>{
    if(mobileHeaderArea.style.display == 'none' || !mobileHeaderArea.style.display){
      mobileHeaderArea.style.display = 'block';
      mobileHeaderArea.appendChild(barLink)
    }else{
      mobileHeaderArea.style.display = 'none';
      mobileHeaderArea.removeChild(barLink)
      container.append(barLink)
    }
})






