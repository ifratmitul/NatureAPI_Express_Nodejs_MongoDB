const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({path:'./config.env'});
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


