// initialize project as node npm to use the package manaer
// node -v to check
// npm -v to see if the package manager is there
// npm init -y to initialize a node project
// then we import Express to use its API for building your server more easily.
// npm install express to install it

// node js turns our computer into a server
// express makes it easier to handle requests

// node server.js to put the server up and running

// npm run dev (after adding dev to scripts in JSON) but this youd have to rerun the server every time
// npm install --save-dev nodemon (we install as a developer dependencies rather than jsut a dependency)

// http://localhost:8383
// http://localhost:8383

const express = require('express'); // now we load express into our project
const app = express(); // app instance
const PORT = 8383; // define where in the ip adress the incoming requests will come

let data = {
    users : ["james"]
}

// Middleware
app.use(express.json());

// configure server to interpret requests
// add HTTP verbs and routes


app.get('/', (req,res) => {
    // this is endpoint number 1
    console.log("yay i hit an endpoint")
    res.sendStatus(200); // heres our response


}) // assume they want to get information
// when a client makes a get request run this funciton
// first argument is / route (the home route)
// the arrow funciton will define waht to do when we request a get into the home route

app.get('/dashboard',(req, res) => {
    console.log("Now i got to dashboaurd");
    res.send('hi')
})

// so we have the get http verb, defined two endopoints that use it and how we respond to them


// website endpoints -> for sendint back HTML

app.get('/homepage', (req,res)=>{
    res.send('<h1>homepage</h1>')
})

// API endpoints (non visual)

app.get('/api/data', (req,res)=>{
    console.log('send my data')
    res.send(data)
})
// but how do we test this?
// we will use the clinet emulator extension

app.listen(PORT, () => console.log(`server has started on: ${PORT}`)); // listens to incoming resquests 


// CRUD: create-post read-get update-put delete-delete

app.get('/api/datastring', (req,res)=>{
    res.send(`
        <body>
        <h1> dataaa</h1>
        <p> ${JSON.stringify(data)}</p>
            
            </body>`) // template literal string to inject data
})

app.post('/api/data', (req, res) => {
    // someone wants to create a user
    // someone posts data through this route
    const newEntry = req.body; // look for hte body of the request, the data associated with the request since its create
    data.users.push(newEntry.name);
    res.sendStatus(201); // associated with created outcome

})

