const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes');

const app = express();

// connecting mongoose with mongodb
mongoose.connect(
  "mongodb+srv://sumit:sumitkumar@e-foodordering-webapp.6x8v2.mongodb.net/FoodOrdering",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(express.json());
app.use(cors());


// creating routes
app.use("/api/user",userRouter)

app.get('/',(req,res)=>{
    res.send("App is Running...")
})

const PORT = 8080;
app.listen(PORT,console.log(`Server started on port: http://localhost:${PORT}`))