let count = 0
let guestCount = 0
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

function add1() {
    count += 1
    homeScoreEl.textContent = count
}
function add2() {
    count += 2
    homeScoreEl.textContent = count
}
function add3() {
    count += 3
    homeScoreEl.textContent = count
}

function guestAdd1() {
    guestCount += 1
    guestScoreEl.textContent = guestCount
}
function guestAdd2() {
    guestCount += 2
    guestScoreEl.textContent = guestCount
}
function guestAdd3() {
    guestCount += 3
    guestScoreEl.textContent = guestCount
}

function reset() {
    guestCount = 0
    count = 0
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}

