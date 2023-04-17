const connectDB = require('./db/connect')
require('dotenv').config();
const Product = require('./models/product')
const productjson = require('./product.json')



const start = async () => {
  try{
    await connectDB(process.env.MONGODB_URL)
    //await Product.deleteMany()
    await Product.create(productjson)
    console.log('success added ');
  }
  catch(error){
    console.log(error);
  }
}


start()
