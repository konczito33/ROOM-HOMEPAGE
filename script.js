const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const headingsHTML = document.querySelectorAll('.main__h2')
const parapraphsHTML = document.querySelectorAll('.main__text')
const imagesHTML = document.querySelectorAll('.hero-img')
let counter = 0;

const mediaQuery = window.matchMedia("(max-width: 1439px)")
    mediaQuery.addEventListener('change', changeImageResolution)

function changeImageResolution(){
    if(mediaQuery.matches){
        imagesHTML.forEach((image, idx) =>{
            image.src = `./assets/mobile-image-hero-${idx + 1}.jpg`
        })
    } else {
        imagesHTML.forEach((image, idx) => {
            image.src =  `./assets/desktop-image-hero-${idx + 1}.jpg`
        })
    }
}

changeImageResolution()

function switchContent() {
    headingsHTML.forEach(heading => {
        heading.classList.remove('main__h2--active')
    })
    headingsHTML[counter].classList.add('main__h2--active')

    parapraphsHTML.forEach(paragraph => {
        paragraph.classList.remove('main__text--active')
    })
    parapraphsHTML[counter].classList.add('main__text--active')
    imagesHTML.forEach(image => {
        image.classList.remove('hero-img--active')
    })
    imagesHTML[counter].classList.add('hero-img--active')
}

function counterValidation() {
    if (counter < 0) return counter = headingsHTML.length - 1
    if (counter > headingsHTML.length - 1) return counter = 0
}

prevBtn.addEventListener('click', () => {
    counter--
    counterValidation()
    switchContent()
})

nextBtn.addEventListener('click', () => {
    counter++
    counterValidation()
    switchContent()

})

switchContent()
counterValidation()

const burger = document.querySelector('.burger')
const list = document.querySelector('.list')

burger.addEventListener('click', () => {
    list.classList.toggle('open')
    document.body.classList.toggle('dark')
    if(list.classList.contains('open')){
        burger.innerHTML = `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>`
    } else {
         burger.innerHTML = `<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#fff" fill-rule="evenodd"/></svg>`
    }
})