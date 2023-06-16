const h1 = document.querySelector('h1')
const color1 = document.querySelector('#color1')
const color2 = document.querySelector('#color2')
const body = document.querySelector('body')
const button = document.querySelector('button')
const h4 = document.querySelector('h4')

button.addEventListener('click', function () {
    const newColor = makeBG()
    document.body.style.background = newColor;
    h4.innerText = `The color codes are ${color1.value} and ${color2.value}`
})


function makeBG() {
    return "radial-gradient(circle," + color1.value + "," + color2.value + ")"
}
