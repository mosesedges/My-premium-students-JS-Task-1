let items = [1, 3, 5, 7,  'Alpha', 'bravo', 'charlie']
let itemNum = [9, 11, 13, 15]


// join two arrays with concat
// indexOf to get the index of an item in the array and to check if it exists in the array if -1 is returned it means that it doesn't exist
// use slice to sahllow copy another arrray or get a part of the array 

const newItem = items.concat(['delta', 'eco', 'foxtrot'])

console.log(items.indexOf('bravo'));
console.log(newItem);

if (newItem.indexOf('bravo') === -1) {
    console.log("Brovo is not available")

}else {
    console.log("Brovo is here");
}