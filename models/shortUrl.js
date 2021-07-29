const mongoose = require('mongoose')
const shortid = require('shortid')
shortid.generate()

const shortUrlSchema = new mongoose.Schema({
  full:{
    type : String,
    required : true
  },
  short:{
    type : String,
    required : true,
    default : shortid.generate
  },
  clicks : {
    type: Number,
    required:true,
    default:0
  }
})

module.exports = mongoose.model('shortUrl' , shortUrlSchema)