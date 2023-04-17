const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name: {
        type:String,
        required: true
    },
    price : {
        type: Number,
        required: [true,"Price is required"],
    },
    featured : {
        type: Boolean,
        default : false
    },
    rating : {
        type: Number,
        default: 4.9
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company : {
        type: String,
        enum : {
            values : ["Apple","Samsung","HP","Dell","MI","Realme","iQoo",
        "KIA","Toyoto","Netflix","Movies"],
        message: `{VALUE} is not supported`,    // we are talking about above field when user enters
        }
    },
});

// in sql its called table we call here collection 

module.exports = mongoose.model("Product", productSchema); 


 