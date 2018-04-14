const mongoose = require('mongoose');

//Todo  

const mongoURL = process.env.NODE_ENV === 'test'

 ? 'mongodb://localhost.27017/forum.app-test'   // 24  march

 : 'mongodb://localhost:27017/forum-app'         // 24 march

mongoose.connect(mongoURL);



module.exports =mongoose;