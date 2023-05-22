const btn = document.querySelector('#btn')
const square = document.querySelector('#square')
const text = document.querySelector('#text')
const eBtn = document.querySelector('#e_btn')
const range = document.querySelector('#range')
const circle = document.querySelector('#circle')
const rangeSpan = document.querySelector('#range-span')

eBtn.style = 'display: none'


const logger = function () {
    square.style.background = text.value
}

const loggerRange = function () {
    rangeSpan.textContent = range.value + '%'
    circle.style.height = range.value + '%'
    circle.style.width = range.value + '%'
}

btn.addEventListener('click', logger)
range.addEventListener('input', loggerRange)


