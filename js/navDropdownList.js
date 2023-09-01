const navLanguage = document.querySelector(".navLanguage")
const navDropdownListItem = document.querySelector(".navDropdownListItem")
const navDropdownList = document.querySelector(".navDropdownList")

navLanguage.addEventListener("mouseenter", ()=>{
    navDropdownList.classList.add("activated")
    navLanguage.style.color = 'white'
})

navDropdownListItem.addEventListener("mouseleave", ()=>{
   navDropdownList.classList.remove("activated")
   navLanguage.style.color = 'black'
})

