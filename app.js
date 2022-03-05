const express = require("express");
const app = express()
const port = 3000
const userRouter = require('./route/userRoute.js');

app.use("/", function(req,res,next){
    console.log("time: ", Date());
    console.log("Request URL: ", req.originalUrl);
    console.log("Request Type: ", req.method);
    next()
})



app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)


app.use('/', userRouter)

app.listen(port,()=> console.log(`example app listening to port ${port}`))