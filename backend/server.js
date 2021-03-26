const express=require('express');
const app=express();
const cors=require('cors');
const userRoutes=require('./Routes/userRouter');
const collabRoutes=require('./Routes/collabRouter');
const port=5000;

//les middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((cors()));

//Routes
app.use('/user',userRoutes);
app.use('/collab',collabRoutes);

app.listen(port,()=>{
  console.log('serveur démarrer sur le port: '+port);
});
