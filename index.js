countEl = document.getElementById("count-el")
saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    countEl.textContent = 0
    count = 0

}