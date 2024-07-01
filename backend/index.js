const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { error } = require('console');
const { type } = require('os');

// Connect cors to port  
app.use(express.json());
app.use(cors());

// Initialise database connection with mongoDB
mongoose.connect("mongodb+srv://aryankap:PnQFfx42fOiv6RRA@cluster0.gpo0jdg.mongodb.net/e-commerce");

// API creation

app.get("/", (req,res)=>{
    res.send("Express App is Running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
   res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
   })
})


// Schema for Creating Products

const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    }, 
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
    })


app.post('/addproduct',async (req,res)=>{
    const product = new Product({
        id:req.body
    })
})

app.listen(port,(error)=>{
    if (!error) {
      console.log("Server is running on port: "+port)
    }
    else 
    {
        console.log("Error: "+error)
    }
})

