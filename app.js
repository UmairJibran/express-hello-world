//* Core requires
const Express = require("express");

const app = Express(); //created object named app for Express class
const portNumber = 3000; //declared port number
app.get("/", (request, response) => {
   response.send("Hello, World");
});

app.listen(portNumber);
