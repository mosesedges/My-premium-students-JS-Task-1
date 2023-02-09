/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const inputEL = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const meterEL = document.getElementById("meter-el")

const measures = { meters: 3.281, feet: 0.3047, liters: 0.264, gallons: 3.7854, kilos: 2.204, pounds: 0.453 }
const measuresArr = ["feet", "meters", "gallons", "liters", "pounds", "kilos"]
const measuresHeaders = ["Length (Meter/Feet)", "Volume (Liters/Gallons)", "Mass (Kilograms/Pounds)"]
const topH = { meters: 3.281, liters: 0.264, kilos: 2.204 }


convertBtn.addEventListener("click", function () {

    const inputValue = Number(inputEL.value)
    let num = 0
    let indexnum = 0

    for (const key in measures) {
        let result = inputValue * measures[key]

        if (key in topH) {
            console.log(key)
            meterEL.innerHTML +=
                `<span class="measure-el">
            <span class="headers-el"> ${measuresHeaders[indexnum]}</span>
                ${inputValue} ${key}
                = 
                ${Math.round(result * 1000) / 1000}
                ${measuresArr[num]}
            </span>`
            indexnum++
        } else {
            meterEL.innerHTML +=
                `<span class="measures">
                    ${inputValue} ${key}
                    = 
                    ${Math.round(result * 1000) / 1000}
                    ${measuresArr[num]}
                </span>`
        }
        num++
    }
}) 

// clear input and screen 