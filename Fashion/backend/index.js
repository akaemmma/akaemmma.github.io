const port = 4000;
const express = require("express")
const app = express();
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path = require("path")
const cors = require("cors");


app.use(express.json());
app.use(cors());

// Database conection with mongodb
mongoose.connect('mongodb+srv://La-mega:007007007@cluster0.ttt4wco.mongodb.net/')

// API Creation
app.get("/",(req, res)=>{
    res.send("Epress App is running")
})

// IMAGE storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req, file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
//  console.log(storage)

const upload = multer({storage:storage})

// creating upload endpoint for images
app.use("/images",express.static('upload/images'))

app.post("/upload",upload.single('product'), (req,res)=>{
    res.json({
        success:1,
        Image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

// schema for Creating Product
const Product = mongoose.model("product",{
    id:{
        type: Number,
        require: true

    },
    name:{
        type: String,
        require: true,

    },
    image:{
        type: String,
        require: true,

    },
    category:{
        type: String,
        require: true,
    },
    new_price:{
        type:Number,
        require: true,
    },
    old_price:{
        type:Number,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    avilable:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct', async (req, res)=>{
    let products = await product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    const product = new product({
        id: req.bod.id,
        name: req.body.name,
        image: req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name:req.body.name,
    })
})


// creating API for deleting product
app.post('/removeproduct',async(req, res)=>{
    await product.findOneAndDelete({id:req.body.id});
    console.log("Reoved")
    res.json({
        success:true,
        name:req.body.name,
    })
})

// creating API for getting all product
app.get('/allproducts', async(req,res)=>{
    let products = await product.find({});
    console.log("All products Fetched")
    res.send(products);
})

app.listen(port,(error)=>{
    if(!error){
        console.log('server running on port'+ port)
    }
    else{
        console.log('error :'+ error)
    }
})

