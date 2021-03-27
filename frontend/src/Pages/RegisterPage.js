import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import './PageStyles/globalCss.css';
import './PageStyles/RegisterPageCss.css';

function RegisterPage() {

  const [identifiant,setIdentifiant]=useState('');
  const [motDePasse,setMotDePasse]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const history =useHistory();

  const handleError=(type)=>{

      const identifiant_element= document.querySelector("#id");
      const motDePasse_element= document.querySelector("#mdp");
      const email_element= document.querySelector("#email");

      //mot de passe invalide
      if(type==="Invalide_Pwd"){
         motDePasse_element.classList.add('error');
      }
      //identifiant, mot de passe et email vide
       if(type==="id_umpty"){
         identifiant_element.classList.add('error');
       }
       if(type==="pwd_umpty"){
         motDePasse_element.classList.add('error');
       }
       if(type==="email_umpty"){
         email_element.classList.add('error');
       }
  }

  //La fonction pour connecter l'utilisateur
  const connecter=(e)=>{
    e.preventDefault();
    const message_element=document.querySelector('.message');

    //contrôler les informations saisies dans la formulaire
    //verifier si les champs identifiants et mot de passe et le mot de passe est superieur à 6 caractères
    if(identifiant && motDePasse && email && motDePasse.length>6){
        setMessage('Connection effectué');
        message_element.style.backgroundColor="blue";
        history.push('/');
    }else{
       if(!identifiant){
         setMessage("Tous les champs sont obligatoires");
         message_element.style.display="block";
         handleError("id_umpty");
       }
       if(!email){
         setMessage("Tous les champs sont obligatoires");
         message_element.style.display="block";
         handleError("email_umpty");
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
       <div className="RegisterForm">
           <h1 className="RegisterformTitle">Créer un compte utilisateur</h1>
           <form onSubmit={connecter}>
               <div className="inputRegisterBlock">
                  <input id="id" type="text" value={identifiant} onChange={(e)=>setIdentifiant(e.target.value)} className="textInput" placeholder="Identifiant"/>
                  <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="textInput" placeholder="Email"/>
                  <input id="mdp" type="password" value={motDePasse} onChange={(e)=>setMotDePasse(e.target.value)} className="textInput" placeholder="Mot de passe"/>
               </div>
               <input type="submit" className="btn-enregistrer" value="Enregistrer"/>
           </form>
           <div className="message">
             {message}
           </div>
       </div>
    </div>
  );
}

export default RegisterPage;
