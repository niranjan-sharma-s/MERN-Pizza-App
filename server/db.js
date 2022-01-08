const mongoose = require("mongoose");

//const mongoURL = "mongodb+srv://DBadmin:DBadmin@cluster0.izmh6.mongodb.net/mern-pizza-DB"

const mongoURL = "mongodb+srv://DBadmin:DBadmin@cluster0.izmh6.mongodb.net/mern-pizza-DB?retryWrites=true&w=majority/mern-pizza-DB"

mongoose.connect(mongoURL, {
    useUnifiedTopology:true, 
    useNewUrlParser:true
})

const db =mongoose.connection

db.on("connected" , () => {console.log('Mongo DB connected')})

db.on("error" , ()=> {console.log('Mongo DB connection failed')})

module.exports = mongoose
