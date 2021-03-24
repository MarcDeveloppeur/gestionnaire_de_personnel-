import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './PageStyles/ConnectPageCss.css';

function ConnectPage() {

  const [identifiant,setIdentifiant]=useState('');
  const [motDePasse,setMotDePasse]=useState('');

  //La fonction pour connecter l'utilisateur
  const connecter=(e)=>{
    e.preventDefault();
    console.log(identifiant+' '+motDePasse);
  }

  return (
    <div className="Container">
       <div className="ConnectForm">
           <h1 className="formTitle">Connectez-vous</h1>
           <form onSubmit={connecter}>
               <input type="text" value={identifiant} onChange={(e)=>setIdentifiant(e.target.value)} className="textInput" placeholder="Identifiant"/>
               <input type="password" value={motDePasse} onChange={(e)=>setMotDePasse(e.target.value)} className="textInput" placeholder="Mot de passe"/>
               <input type="submit" className="btn-connecter" value="Se connecter"/>
           </form>
           <Link to="/Register" className="link">Créer un compte</Link>
       </div>
    </div>
  );
}

export default ConnectPage;
