let inputEl = document.querySelector("input")
let buttonEl = document.querySelector("button")

let meterValueEl = document.querySelector("#meter-value")
let meterResultEl = document.querySelector("#meter-result")
let feetValueEl = document.querySelector("#feet-value")
let feetResultEl = document.querySelector("#feet-result")

let literValueEl = document.querySelector("#liter-value")
let literResultEl = document.querySelector("#liter-result")
let gallonValueEl = document.querySelector("#gallon-value")
let gallonResultEl = document.querySelector("#gallon-result")

let kiloValueEl = document.querySelector("#kilo-value")
let kiloResultEl = document.querySelector("#kilo-result")
let poundValueEl = document.querySelector("#pound-value")
let poundResultEl = document.querySelector("#pound-result")

buttonEl.addEventListener("click", function() {
    meterValueEl.textContent = inputEl.value
    feetValueEl.textContent = inputEl.value
    feetResultEl.textContent = (inputEl.value * 3.280839895).toFixed(3)
    meterResultEl.textContent = (inputEl.value * 0.3048).toFixed(3)

    literValueEl.textContent = inputEl.value
    gallonValueEl.textContent = inputEl.value
    gallonResultEl.textContent = (inputEl.value * 0.219968813).toFixed(3)
    literResultEl.textContent = (inputEl.value * 4.546099).toFixed(3)

    kiloValueEl.textContent = inputEl.value
    poundValueEl.textContent = inputEl.value
    poundResultEl.textContent = (inputEl.value * 2.2046226218).toFixed(3)
    kiloResultEl.textContent = (inputEl.value * 0.45359237).toFixed(3)    
})