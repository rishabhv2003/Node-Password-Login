const express = require("express");
const app = express();
const expressLayoutes = require("express-ejs-layouts");

// EJS
app.use(expressLayoutes);
app.set('view engine', 'ejs');

// Routes
app.use("/",require("./routes/index"));
app.use("/users",require("./routes/users"));

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server started on Port ${port}`));