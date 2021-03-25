const express=require('express');
const router=express.Router();
const controllers=require('../Controllers/userControllers');

//Enregistrer un utilisateur
router.post('/addUser',controllers.addUser);

//Connecter un utilisateur
router.post('/connectUser',controllers.connectUser);

module.exports=router;
