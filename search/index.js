const users=[
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        gender: "Male",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        gender: "Female",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        gender: "Male",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
    },
]

const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("search-el")
const pEl = document.getElementById("p-el")
const searchTerm = ['gender','username']



buttonEl.addEventListener("click", function () {
    const {names, emails } = {names :users.map(x => x.name), emails :users.map(x => x.email)}
    const searchTerm = [...names,...emails]
    for (key of Object.enteries(users).flat(3)) {
        console.log(`this is the ${key}`)
    }
    console.log(searchTerm)

    // users.forEach((element, index, array) =>{
    //     if(inputEl.value === element.email || inputEl.value === element.username)
    //     console.log(array)
    // })

    const result = users.filter(user => {
        return user.username === inputEl.value || user.email === inputEl.value
    })
    resulElements = result.map(x => 
        `<li>Name: ${x.name}</li>
        <li> Email: ${x.email}</li>
        <li>Username: ${x.username}</li>`
        )
    pEl.innerHTML = resulElements
    console.log(result)

    // if (searchTerm.indexOf(inputEl.value) > 1) {
    //     console.log('working on this thing')
    //     console.log(inputEl.value)
    // }else{
    //     console.log('we dey look o')
    // }
})





