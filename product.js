const mongoose = require('mongoose')

const productSchema =mongoose.Schema(

    {
     
        name:{
            type:string,
            required: true
            
           },
        val:{
            type:string,
            required:true
        },
        price :{
            type : Number,
            required :true
        }

    },
    {
        timestamp: true
    }
)

const product =mongoose.model('product',productSchema);
module.export = product;