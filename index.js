const express = require('express');
console.log('my App');

const app = express();
const port=3000;

app.get('/',(req, res)=>{
    res.send('Hola mi Server en express');
})
app.get('/nueva_ruta',(req, res)=>{
    res.send('Hola soy una nueva ruta');
})

app.get('/products',(req, res)=>{
    res.json({
      name:"Product 1",
      price:1000
    })
})

app.listen(port,()=>{
    console.log('Mi puerto:', port);
})
