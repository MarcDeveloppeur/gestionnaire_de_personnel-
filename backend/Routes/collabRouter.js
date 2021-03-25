const express=require('express');
const router=express.Router();
const controllers=require('../Controllers/collabControllers');

//Ajouter un collaborateur
router.post('/addCollab',controllers.addCollab);
//supprimer un collaborateur
router.delete('/deleteCollab/:id',controllers.deleteCollab);
//modifier un collaborateur
router.put('/updateCollab/:id',controllers.updateCollab);
//liste de tous les collaborateurs
router.get('/listeCollab/',controllers.listeCollab);
//rechercher des collaborateurs selon leurs nom
router.get('/recherche/:nom',controllers.recherche);

module.exports=router;
