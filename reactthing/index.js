// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const message = document.getElementById("root")
// message.innerHTML = `<h1 class="header">I am the new kid</h1>`

const h2 = document.createElement("h2")
h2.textContent = " this is imperative way of doing things"
h2.className = "header"
document.getElementById("root").append(h2)