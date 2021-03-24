import React from 'react';
import {Link} from 'react-router-dom';
import './PageStyles/ConnectPageCss.css';

function ConnectPage() {

  //La fonction pour connecter l'utilisateur
  const connecter=(e)=>{
    e.preventDefault();
    console.log('salut');
  }

  return (
    <div className="Container">
       <div className="ConnectForm">
           <h1 className="formTitle">Connectez-vous</h1>
           <form onSubmit={connecter}>
               <input type="text" className="textInput" placeholder="Identifiant"/>
               <input type="password" className="textInput" placeholder="Mot de passe"/>
               <input type="submit" className="btn-envoyer" value="Connecter"/>
           </form>
           <Link to="/Register">Créer un compte</Link>
       </div>
    </div>
  );
}

export default ConnectPage;
