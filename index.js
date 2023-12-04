const express = require('express');
const cors = require("cors");
require("./DB/Config");
const Quarter = require("./DB/Quarter");

const app = express();
app.use(express.json());
app.use(cors());

app.post('/quarter',async(req,res)=>{
    let quarter = await new Quarter(req.body);
    let result = await quarter.save();
    res.send(result);
})

app.get('/',async(req,res)=>{
    const data = await Quarter.find();
    if (data.length > 0) res.send(data);
  else res.send({ result: "No product found" });
})

app.listen(8000);