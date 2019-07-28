const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req,res) => {
    //res.json ("welcome To node JS oke banget")
    res.sendFile(path.join(__dirname,'index.html'))
});

app.use(express.static(__dirname + '/public'));


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server berjalan pada ${port}`);
});


