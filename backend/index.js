require("dotenv").config();

const { Signup, Login} = require('./controllers/AuthController');
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoute = require("./routes/AuthRoute.js");
const cookieParser = require("cookie-parser");

const {HoldingsModel} = require("./model/HoldingsModel");
const {PositionsModel} = require("./model/PositionsModel");
const {OrdersModel} = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://zerodha-dashboard-sigma.vercel.app",
  "https://zerodha-dashboard-pjw4fwuxz-kakinada-mohankumars-projects.vercel.app",
  "https://zerodha-dashboard-git-main-kakinada-mohankumars-projects.vercel.app",
];

app.set('trust proxy', 1);
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use("/", authRoute); // All routes mounted after CORS



// // ADD THESE LINES
// app.post('/signup', Signup);
// app.post('/login', Login);


app.get("/allHoldings" ,async (req ,res) =>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions" ,async (req ,res) =>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post('/newOrder',async(req,res)=>{
    let newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("Order saved!");
});

app.listen(PORT, () =>{
    console.log(`server is listening to port ${PORT}`);
});

mongoose.connect(url)
  .then(() => console.log('MongoDB is connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
