const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const carsRouter = require("./routes/cars")
const app = express();
const PORT = process.env.PORT || 8000;




//connect to mongodb
const dbUrl = "mongodb+srv://m2406:whJaqTam7AwRUut@cluster0.9gkt2.mongodb.net/tesla";

mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) => app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
}))
.catch((err) => {console.log(err)})


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use("/api",carsRouter);

app.get("/",(req,res)=>{
    res.send("HOME")
})

