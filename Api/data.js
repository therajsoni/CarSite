const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer'); // Multer for file uploads
const ApiFeatures = require("./utils/apiFeature");
const app = express();
const upload = multer({ dest: 'uploads' });

const mongooseConnect = async() => {
    await mongoose.connect("mongodb://localhost:27017/Cars").then(()=>{
        console.log(`connect`);        
    }).catch((error)=>{
        console.log(`${error}`);        
    })
} 


mongooseConnect();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));


const {Schema} = mongoose;

const schema =   new Schema({
    name : {
        type : String,
        required  : true,
        set: value => value.replace(/\"/g, "")
    }
    ,
    price : {
        type : Number,
        required : true 
    }
    ,
    brand : {
        type : String,
        required : true  ,
        set: value => value.replace(/\"/g, "")
    }
    ,
    model: {
        type: String,
        required: true,
        set: value => value.replace(/\"/g, "") 
    },
    seller : {
        type : String,
        required  : true,
        set: value => value.replace(/\"/g, "")
    }
    ,
    performance : {
        type : String,
        required  : true,
        set: value => value.replace(/\"/g, "")
    }
    ,
    owner : {
        type : String,
        required  : true,
        enum : ["Localseller","seller"],
        set: value => value.replace(/\"/g, "")
    }
    ,
    miLeg : {
        type : Number,
        required  : true
    }
    ,
    serviving :{
        type :  Number,
        required  : true
    }
    ,
    photo : {
        type : String,
        required  : true
    },
      createdAt : Date,
      updatedAt : Date,
    }
,{
    timestamps:true,
}
)

// schema.virtual("age").get(function(){
//     const today = new Date();
//     const dob = this.year;
//     let age = today.getFullYear() - dob.getFullYear();
//     if (
//         today.getMonth() < dob.getMonth() ||
//         (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
//       ) {
//         age--;
//       }
    
//       return age;
// })



  

schema.pre('save', function (next) {
    this.name = this.name.replace(/\\/g, ""); // Remove backslashes from 'name'
    this.brand = this.brand.replace(/\\/g, ""); // Remove backslashes from 'brand'
    // You can do similar for other fields if needed
  
    next();
  });

const Car = mongoose.model("CarList",schema);

app.get("/getAllData",async(req,res)=>{

    try{

        const CarsPerPage = 100;
        const apiFeature = new ApiFeatures(Car.find(), req.query).search().filter().pagination(CarsPerPage);
        const products = await apiFeature.query;
        // const CarData = await Car.find({});
        return res.status(200).json({
            message: "getAllData",
            success: true,
            data: products,
            total: await Car.countDocuments(), // Total number of cars for pagination
            currentPage: apiFeature.currentPage || 1, // Current page number
            totalPages: Math.ceil(await Car.countDocuments() / CarsPerPage)
        });
    }
    catch(error){
        return res.status(500).json({
            message: "An error occurred",
            error: error.message
        });
    }

})


app.get("/:id",async(req,res)=>{

    try {
        const carData = await Car.findById(req.params.id);
        res.status(200).json({
            message : "found car",
            success : true,
            carDetails : carData
        })
    } catch (error) {
        res.status(500).json({
            message : "found not car",
            success : false 
        })
    }
})


app.post("/add-cars",  upload.single('photo'), async(req,res)=>{
    try {
        
        const { name, price, brand,model, seller, performance,owner, miLeg, serviving } = req.body;        
        
        const photo = req.file;
        
        
        // if(name && price && brand &&seller&& year &&performance&& owner &&MiLeg&& serviving &&photo){
         
        const car =  await Car.create({
                name, price ,brand ,seller ,model, performance ,owner, miLeg ,serviving,photo:`${req.protocol}://${req.get('host')}/uploads/${photo.filename}`
            });

            return res.status(201).json({
                success : true,
                message : "Product create Successfully",
                car
            })

    // }else{
    //     res.send("ADD ALL Fields").status(401).json({
    //         message : "ADD ALL Fields",
    //         success : false,  
    //     })
    // }


    } catch (error) {
        return res.send(error).status(500).json({
            message : "ADD ALL Fields",
            success : false,  
        })
    }
})


app.delete("/delete",async(req,res)=>{
    await Car.deleteMany();
    res.status(200).send("delete")
})



app.listen(3000);