const pool=require('../DBConnection');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');

//controlleur de l'ajout d'utilisateur
exports.addUser=(req,res)=>{
   try{
   //Verifier si l'information du formulaire est bien remplie
      if(req.body){
        const {email,motDePasse,identifiant}=req.body;

        //Crypter le mot de passe avant l'enregistrement
        bcrypt.hash(motDePasse,10)
        .then(async(pwdHashed)=>{
            const result=  await pool.query("INSERT INTO users (email,mot_de_passe,identifiant) VALUES ($1,$2,$3) RETURNING * ",[email,pwdHashed,identifiant]);
            res.json(result.rows);
        }).catch((err)=>{
           console.log(err);
        });

          }
    }catch(err){
        console.error(err);
    }

}

//controlleur du connection d'utilisateur
exports.connectUser=(req,res)=>{
    try{

      //Verifier si l'email exite dans la base
      pool.query('SELECT * FROM users WHERE email=$1',[req.body.email])
      .then((result)=>{

          //comparer le mot de passe avec le mot de passe crypter
          bcrypt.compare(req.body.motDePasse,result.mot_de_passe)
          .then(()=>{

              //Assigner un token à l'utilisateur pour qu'il puisse acceder au ressources de l'API
               const token=jwt.sign({
                 administrateur:true
               },"secretKey",{expiresIn:"24h"});

               res.status(200).send({token:token});

          }).catch(()=>res.status(404).send({message:"Mot de passe incorrect"}));

        })
        .catch(()=>res.status(404).send({message:"Utilisateur non touvé"}));

    }catch(err){

       console.error(err);

    }

}
