//importing express
const express= require('express');
const userRouter=require('./router/userRouter')
const productRouter =require('./router/productRouter');


//initialize express
const app=express();

const port =5000;

//middleware

//if data is coming in json then convert in javscript format
app.use(express.json());

app.use('/user',userRouter);
app.use ('/product',productRouter);


//endpoint or route
app.get('/',(req,res)=>{
    res.send('response from express');
})

app.get('/add',(req,res)=>{
    res.send('response from add');
});

//getall
app.get('/getall',(req,res)=>{
    res.send('response from getall');
});

//update
app.get('/update',(req,res)=>{
    res.send('response from update')
})



//starting the sever

app.listen(port, ()=> {
    console.log('server started');
});
