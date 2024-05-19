const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(
  `mongodb+srv://arpitaware2004:Erawa1234@cluster0.hsvocgx.mongodb.net/`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);


const connection = mongoose.connection

connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);

connection.on('connected' , () => console.log('Mongo DB Connection Successfull'))