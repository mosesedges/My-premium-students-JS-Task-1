

// destructure objects and nested objects.

const users = {
    name: 'John',
    address:{
        home: 'Palmers Green London',
        postCode: 'En13 LNR'
    }
}

const {name, address:{home, postCode}} = users
console.log(`${name} lives in ${home} ${postCode}`)
