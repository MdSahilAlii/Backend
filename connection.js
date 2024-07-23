const mongoose = require('mongoose');

const url = 'mongodb+srv://sahil:sahil@cluster0.hduogxi.mongodb.net/mydb?retryWrites=true&w=majority&appName=Cluster0';

//asynchronous functions - Promise object
mongoose.connect(url)
   .then((result) => {
      console.log('Database connected');
   })
   .catch((err) => {
      console.log(err);
   });


module.exports = mongoose;