const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a45e06a75mshb63713c74f09393p127dd6jsn9e963b50220b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const  london  = async (handle) => {
const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3'
const response  = await fetch(url, handle)
return await response.json()
}

london(options)
.then(weather => console.log(weather.location.tz_id))

// promise 
const userData = new Promise((resolve, reject) => {
	setTimeout(() =>{
	const username = "moEdges"
	if(username) {
		resolve({name:"Moses", username, email:"example.com", avater:"rhino.png"})
	}else {
		reject("there is no data returned")
	}	
	},2000)
})

userData
	.then(data => console.log(data))
	.catch(err => console.log(err))


//Fetch Get
fetch('https://jsonplaceholder.typicode.com/comments/1')
.then(response => response.json())
.then(data => console.log(data))
	

// fetch POST

fetch('https://jsonplaceholder.typicode.com/comments/',{
	method: "POST",
	body:JSON.stringify({
		id: 1,
		name: "Rango",
		region:"Africa",
		email: "thisaims@example.com",
		body: "this is this request body"

	})

})
.then(response => response.json())
.then(data => console.log(data))	
