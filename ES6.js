

// destructure objects and nested objects.

const users = {
    name: 'John',
    address:{
        home: 'Palmers Green London',
        postCode: 'En13 LNR'
    },
    name: 'Luckas',
    address:{
        home: 'Edmonton London',
        postCode: 'BT33 PNR'
    }
}

//users.forEach(({address:{home}}) => console.log(home))

const {name, address:{home, postCode}} = users
console.log(`${name} lives in ${home} ${postCode}`)

// shorthand properties is somehow an opposite of object destructuring 

let firstName = "Moses"
let lastName = "Ejele"
let email = "moej@gmail.com"

const person = {firstName, lastName, email}
console.log(person)

let captain = "Lindley"

let team = {person, captain}
console.log (team)

// functions as default peremeter 
const speak = ( language = () => console.log("PIKABOO")) => language()
//console.log(speak(function(){console.log("changes")}))
console.log(speak())

// using spread operator to searve funtion perameters
staff = ["mike", "Romeo", "Victor"]

const members = (m1, m2, m3) => console.log(`${m1} is included on ${new Date().toDateString()}  ${m2} should be manager ${m3} is the director`)

members(...staff)


//using template literals to create funs words gaps  

let message = `
edmonton      muswe hill
        
        woodgreen                like 
luck            pinkpong
        fix me      
    turnpike lane           Bows park
                                        world
                            Palmers Green

`
console.log(message)

// template literals and function 

function tag(string, ...values) {
    if(values[0] > 11){
        values[1] = "AfterNoon"
    }
    return `${string[0]} ${values[0]} ${string[1]} ${values[1]} `
}

let sleep = tag `It is ${new Date().getHours()} it's ${""}`

console.log(sleep)