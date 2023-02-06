let items = [1, 3, 5, 7, 'Alpha', 'bravo', 'charlie']
let itemNum = [9, 11, 13, 15]


// join two arrays with concat
// Use indexOf() to get the index of an item in the array and to check if it exists in the array if -1 is returned it means that it doesn't exist
// Use slice(start, number to cut , end) to sahllow copy another arrray or get a part of the array 
// Use join(" ") returns all the arrays together separated by a space
// use sort() to sort an array of item and sort((a, b)=> a - b) to sort numbers of length of array

const newItem = items.concat(['delta', 'eco', 'foxtrot'])

console.log(items.indexOf('bravo'));
console.log(newItem);


// checking if bravo is in the array 
if (newItem.indexOf('bravo') === -1) {
    console.log("Brovo is not available")
} else {
    console.log("Brovo is here");
}

// slice items to get a subsection of the items
itemSlice = items.slice(0, 4);
console.log(itemSlice);

// join use to return the items in an array without the square brackets, the items joined by any string specified in the join bracket
console.log(itemSlice.join(" "))

// join usecase
games = 'juliet victor'
names = games.split(' ')
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

console.log(names)

// sort an array of strings
gamers = ['Murray', 'Mike', 'Moses', 'Morris']
sortedgamers = gamers.sort();
console.log(sortedgamers)

// sort by length
gamersLength = gamers.sort((a, b) => a.length - b.length)
console.log(gamersLength)

// sort numbers 
nums = [183176, 93738, 20, 39, 63965, 73541, 287, 65, 73, 9263,]
numsorted = nums.sort((a, b) => a - b);
console.log(numsorted)

// sort an array of objects based on a key
peopleVotes = [
    {APC: '8 years', votes : 32},
    {PDP: '16 years', votes : 12},
    { LP :'0 years', votes: 734}
]

votesSorted = peopleVotes.sort((a, b) => b.votes - a.votes) // reverse sorting... hightest first

console.log(votesSorted)


