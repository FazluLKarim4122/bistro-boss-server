const express = require('express')
const app = express() // app বানাবো express কে call করে।
const cors = require('cors');
const port = process.env.PORT || 5500 ;


// middleware
app.use(cors())
app.use(express.json())












app.get('/', (req,res) =>{
    res.send('Bistro Boss restaurent is Open')
})

app.listen(port, ()=>{
    console.log(`Bistro Boss server is running on PORT: ${port}`);
})