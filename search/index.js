const users =[
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
    keys = users.map(x => ( x.name))
    console.log(keys)
    if (keys.indexOf(inputEl.value) > 1) {
        console.log(keys)
        console.log(inputEl.value)
    }else{
        console.log('we dey look o')
    }
})

console.log(users)




console.log('gender' in searchTerm)