const hamburger = document.querySelector(".hamburger")
const hamburgerImage = document.querySelector(".hamburger img")
const mobileNavbar = document.querySelector(".nav-mobile")

let menuIsOpen = false

hamburger.addEventListener("click", () => {
    if(menuIsOpen == false){
        menuIsOpen = true
        hamburgerImage.src = './assets/shared/icon-close.svg'
        mobileNavbar.classList.add("active")
        document.body.style.overflow = "hidden"
    } else {
        menuIsOpen = false
        hamburgerImage.src = './assets/shared/icon-hamburger.svg'
        mobileNavbar.classList.remove("active")
        document.body.style.overflow = "auto"
    }
})