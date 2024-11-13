import app from './app.js'
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err)=>{
    if(err){
        console.log("Server Connection Fail")
    }else{
        console.log(`Server Connection SuccessFull,${PORT}`);
    }
})