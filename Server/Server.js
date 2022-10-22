const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes');
require('dotenv').config()

const app = express();

// connecting mongoose with mongodb
mongoose.connect(
  process.env.DATABASE,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Server Started...")
})

// creating routes
app.use("/api/user",userRouter)

app.listen(process.env.PORT || 8080,console.log(`Server started...`))