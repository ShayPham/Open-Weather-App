// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express')


// respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello world')
// })

// Start up an instance of app
const app = express()
const bodyParser= require('body-parser')


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.get("/", (req, res) => {
    res.json({
      temperature:'',
      date: "",
      user: ""
    });
  });
app.post("/add", (req, res) => {
  console.log(req.body);
  projectData = req.body;
  res.json({
    statusCode: 200,
    message: "data received",
    data: projectData,
  });
});

  const port = 5500;

app.listen(port, listening);
function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}