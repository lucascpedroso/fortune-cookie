let screen1 = document.querySelector('.screen1')
let screen2 = document.querySelector('.screen2')
let cookie = document.querySelector('#cookie')
let btn = document.querySelector('#btn')

cookie.addEventListener('click', handleClick)
btn.addEventListener('click', handleClick)
document.addEventListener("keydown", function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleClick()
    } else {
        handleClick()
    }
})

function handleClick() {
    toggleScreen()
}


function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}