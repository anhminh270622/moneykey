// const closedFace = document.querySelector('.closed')
// const openFace = document.querySelector('.open')
// const Open = document.querySelector('.open1')
// const Close = document.querySelector('.close1')

// closedFace.addEventListener('click', () => {
//     if (openFace.classList.contains('open')) {
//         openFace.classList.add('active')
//         closedFace.classList.remove('active')
//     }
// })

// openFace.addEventListener('click', () => {
//     if (closedFace.classList.contains('closed')) {
//         closedFace.classList.add('active')
//         openFace.classList.remove('active')
//     }
// })

// Open.addEventListener('click', () => {
//     if (openFace.classList.contains('open')) {
//         openFace.classList.add('active')
//         closedFace.classList.remove('active')
//     }
// })

// Close.addEventListener('click', () => {
//     if (closedFace.classList.contains('closed')) {
//         closedFace.classList.add('active')
//         openFace.classList.remove('active')
//     }
// })
const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const Open = document.querySelector('.open1')
const Close = document.querySelector('.close1')

Open.addEventListener('click', () => {
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active')
        closedFace.classList.remove('active')
    }
})

Close.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active')
        openFace.classList.remove('active')
    }
})