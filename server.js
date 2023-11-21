const express = require ('express')
const mongoose = require('mongoose')
const product = require('./product')

const app= express()
app.use(express.json())


app.get('/', (req,res)=>{
    res.send('hello node ')
});

app.get('/', (req,res)=>{
    res.send('hello node somu ')
});

app.post ('/product', async(req,res) => {
    try{
        const product =await product.create(req,body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message});
    }
});




mongoose.connect('mongodb://localhost:27017/deepan')
.then (() => {
    console.log('connected mongodb')
    app.listen(3000, ()=> {
        console.log("your api is running on port 3000")
    })
}).catch (() => {
    console.log(error)
})