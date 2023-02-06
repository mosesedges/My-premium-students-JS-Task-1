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

buttonEl && buttonEl.addEventListener("click", function () {
    console.log(inputEl.value)
    if (inputEl.value === 'gender' || inputEl.value === 'username') {
        console.log(inputEl.value)
        users.filter(x => x.searchTerm.indexOf('gender') > 1)
            .sort(inputEl.value)
        console.log(inputEl.value)
    }else {
        console.log('not working')
    }
})

console.log(users)




console.log('gender' in searchTerm)