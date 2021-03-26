import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import './PageStyles/globalCss.css';
import './PageStyles/ConnectPageCss.css';

function ConnectPage() {

  const [identifiant,setIdentifiant]=useState('');
  const [motDePasse,setMotDePasse]=useState('');
  const [message,setMessage]=useState('');
  const history=useHistory();

  const handleError=(type)=>{

      const identifiant_element= document.querySelector("#id");
      const motDePasse_element= document.querySelector("#mdp");

      //mot de passe invalide
      if(type==="Invalide_Pwd"){
         motDePasse_element.classList.add('error');
      }
      //identifiant et mot de passe vide
       if(type==="id_umpty"){
         identifiant_element.classList.add('error');
       }
       if(type==="pwd_umpty"){
         motDePasse_element.classList.add('error');
       }
  }

  //La fonction pour connecter l'utilisateur
  const connecter=(e)=>{
    e.preventDefault();
    const message_element=document.querySelector('.message');

    //contrôler les informations saisies dans la formulaire
    //verifier si les champs identifiants et mot de passe et le mot de passe est superieur à 6 caractères
    if(identifiant && motDePasse && motDePasse.length>6){
        setMessage('Connection effectué');
        message_element.style.backgroundColor="blue";

        //envoyer les données vers la base pour l'authenfication
        const data={
          identifiant:identifiant,
          motDePasse:motDePasse
        }
        axios.post('http://localhost:5000/addUser',data)
        .then((res)=>{
          console.log("utilisateur enregistrer");
        })
        .catch((err)=>{
          console.error(err);
        })
        history.push('/Home');

    }else{
       if(!identifiant){
         setMessage("Tous les champs sont obligatoires");
         message_element.style.display="block";
         handleError("id_umpty");
       }
       if(!motDePasse) {
         setMessage("Tous les champs sont obligatoires");
         message_element.style.display="block";
         handleError('pwd_umpty');
       }
       if(motDePasse.length<=6) {
         setMessage("Le mot de passe doit avoir au moin 6 caractères");
         message_element.style.display="block";
         handleError('Invalide_Pwd');
       }

    }

  }

  return (
    <div className="Container">
       <div className="ConnectForm">
           <h1 className="formTitle">Connectez-vous</h1>
           <form onSubmit={connecter}>
               <div className="inputBlock">
                  <input id="id" type="text" value={identifiant} onChange={(e)=>setIdentifiant(e.target.value)} className="textInput" placeholder="Identifiant"/>
                  <input id="mdp" type="password" value={motDePasse} onChange={(e)=>setMotDePasse(e.target.value)} className="textInput" placeholder="Mot de passe"/>
               </div>
               <input type="submit" className="btn-connecter" value="Se connecter"/>
           </form>
           <Link to="/Register" className="link">Créer un compte</Link>
           <div className="message">
             {message}
           </div>
       </div>
    </div>
  );
}

export default ConnectPage;
