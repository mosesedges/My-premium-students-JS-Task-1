// copy Arrays with spread operator
arr1 = [1, 2, 3,]
arr2 = [4, 5,6]
arr3 = [7, 8, 9,[ 10, 11, 13, [25, 26, 27,]]]

arrCopy = [...arr1, ...arr2,]
console.log(arrCopy)

// combine 2 arrays.
const users = {
    name: 'John',
    address:{
        home: 'Palmers Green London',
        postCode: 'En13 LNR'
    }
}
// combine 2 objects with sprade oerators
const users2 = { Male:'Mike', female:'Romeo', male:'Victor'}
const newObj = {...users, ...users2}
console.log(newObj)

// destructure a nested object
const {address:{home, postCode}} = users
console.log(postCode)
console.log(home)

// flaten nested array with array.prototype.flat
console.log(arr3.flat(2)) // the numer: parameter specifies how deep the flattening should be


// use for...in loop to get array index of the items and for...of loop ro get thr array items
newarr3 = arr3.flat(2)
for (item in newarr3) {
    console.log(item)
}

for (item of newarr3) {
    if (item === 25){
        console.log('Present in the array')

    }
}

// convert an object into an array and back to object again
objToArr = Object.entries(newObj) // object to array
console.log(objToArr)

arrToObj = Object.fromEntries(objToArr) // array to object
console.log(arrToObj)

// saftly acess a property of an array or object with optional chaining 

console.log(arrToObj?.Male) 
console.log(arrToObj?.lady) // returns undefined instead of an error because no key item lady in the object

console.log(objToArr?.[0]) 
console.log(objToArr?.[12]) // returns undefined instead of an error because no item phone in the array
