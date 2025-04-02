const  express = require ('express');
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const todoRoutes = require('./MVC/Routes/todoRoutes');
const cors = require ("cors");
const app = express();
dotenv.config()
app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);
PORT = process.env.PORT ||5000;
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDb successfully connected");
}).catch((err)=>{
    console.error(err);
})



app.listen(PORT, ()=>{
    console.log(`Server started successfully at ${PORT} `)
})
