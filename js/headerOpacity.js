const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{
  if(this.window.scrollY > navbar.offsetHeight ){
    if(window.innerWidth < 850) return
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.25)"
   

  }else{
    navbar.style.backgroundColor = "white"
  }
})