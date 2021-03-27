const pool=require('../DBConnection');

//ajouter un collaborateur
exports.addCollab=async(req,res)=>{
   try{
   //Verifier si l'information du formulaire est bien remplie
      if(req.body){
          const {nom,prenom}=req.body;
           const result=  await pool.query("INSERT INTO collaborateur (nom,prenom) VALUES ($1,$2) RETURNING * ",[nom,prenom]);
            console.log('enregistrement éffectué');
        }
    }catch(err){
        console.error(err);
    }

}

//Liste de tous les collaborateurs
exports.listeCollab=(req,res)=>{
   try{
       pool.query("SELECT * FROM collaborateur")
       .then((result)=>{
            res.status(200).json(result.rows);
       }).catch((err)=>console.log(err));

    }catch(err){
        console.error(err);
    }
}

//rechercher des collaborateurs selon leurs nom
exports.recherche=async(req,res)=>{
   try{
     if(req.params){
       const result=  await pool.query("SELECT * FROM collaborateur WHERE nom=$1 ",[req.params.nom]);
        res.status(200).json(result.rows);
     }
    }catch(err){
        console.error(err);
    }
}

//supprimer un collaborateur
exports.deleteCollab=async(req,res)=>{
  try{
       if(req.params){
         const {id}=req.params;
         const result=await pool.query('DELETE FROM collaborateur WHERE collab_id=$1 RETURNING *',[id]);
         res.status(200).json("suppression éffectuée");
       }
    }catch(err){
      console.error(err);
    }
  }

//Modifier un collaborateur
  exports.updateCollab=async(req,res)=>{
     try{
        if(req.body && req.params){
            const {nom,prenom}=req.body;
            const {id}=req.params;
             const result=  await pool.query("UPDATE collaborateur SET nom=$1 , prenom=$2 WHERE collab_id=$3",[nom,prenom,id]);
              console.log("Modification éffectuée");
            }
      }catch(err){
          console.error(err);
      }

  }
