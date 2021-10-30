const hamburger = document.querySelector(".hamburger")
const hamburgerImage = document.querySelector(".hamburger img")

let menuIsOpen = false

hamburger.addEventListener("click", () => {
    console.log(menuIsOpen)

    if(menuIsOpen == false){
        menuIsOpen = true
        hamburgerImage.src = './assets/shared/icon-close.svg'
    } else {
        menuIsOpen = false
        hamburgerImage.src = './assets/shared/icon-hamburger.svg'
    }

    console.log(menuIsOpen)
})