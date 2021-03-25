const pool=require('../DBConnection');

//controlleur de l'ajout d'utilisateur
exports.addUser=async(req,res)=>{
   try{
   //Verifier si l'information du formulaire est bien remplie
      if(req.body){
          const {email,motDePasse}=req.body;
           const result=  await pool.query("INSERT INTO users (email,mot_de_passe) VALUES ($1,$2) RETURNING * ",[email,motDePasse]);
            res.json(result.rows);
          }
    }catch(err){
        console.error(err);
    }

}

//controlleur du connection d'utilisateur
exports.connectUser=(req,res)=>{

}
