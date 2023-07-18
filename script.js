/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const button = document.getElementById("btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
button.addEventListener("click",function(){
    const display = document.getElementById("result")
    let value = Number(display.value)
    let metertofeet=(3.281*value).toFixed(3)
    let feettometer=(value/3.281).toFixed(3)
    let litertogallon=(value*0.264).toFixed(3)
    let gallontoliter=(value/0.264).toFixed(3)
    let kmtopound=(value*2.204).toFixed(3)
    let poundtokm=(value/2.204).toFixed(3)
    length.textContent=`${value} meters = ${metertofeet} feet | ${value} feet = ${feettometer} meters`
    volume.textContent=`${value} liters = ${litertogallon} gallons | ${value} gallons = ${gallontoliter} liters`
    mass.textContent=`${value} kilos = ${kmtopound} pounds | ${value} pounds = ${poundtokm} kilos`
})