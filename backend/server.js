const express=require('express');
const app=express();
const port=5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>{
  console.log('serveur démarrer sur le port: '+port);
});
