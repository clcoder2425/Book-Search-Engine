const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
}).catch ((err) => {
  console.log(err);
});


module.exports = mongoose.connection;
