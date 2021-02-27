const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path:'./config.env'});

const app = require('./app');
const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true
})
.then( con => {console.log('Connected');})

const port = process.env.PORT || 3000
app.listen( port, () => {
    console.log(`Running on port: ${port}`);
});


