import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import './PageStyles/globalCss.css';
import './PageStyles/RegisterPageCss.css';
import './PageStyles/addColloborateurCss.css';

function EditCollab(props) {

  const [name,setName]=useState('');
  const [firstname,setFirstname]=useState('');
  const [message,setMessage]=useState('');
  const history =useHistory();

  const handleError=(type)=>{

      const nom_element= document.querySelector("#nom");
      const prenom_element= document.querySelector("#prenom");

      //nom et prenom vide
       if(type==="name_umpty"){
         nom_element.classList.add('error');
       }
       if(type==="first_umpty"){
         prenom_element.classList.add('error');
       }
  }

  //La fonction pour connecter l'utilisateur
  const modifier=(e)=>{
    e.preventDefault();
    const message_element=document.querySelector('.message');

    //contrôler les informations saisies dans la formulaire
    //verifier si les champs identifiants et mot de passe et le mot de passe est superieur à 6 caractères
    if(name && firstname ){
        setMessage('Enregistrement effectué');
        message_element.style.backgroundColor="blue";

        //mettre à jours la base de donnée
        const id=props.match.params.id;
        console.log(id);
        const data={
          nom:name,
          prenom:firstname
        }
       axios.put('http://localhost:5000/collab/updateCollab/'+id,data)
       .then(()=>{
          history.push('/List');
       })
       .catch((err)=>{
         console.log(err);
       })

    }else{
       if(!name){
         setMessage("Tous les champs sont obligatoires");
         message_element.style.display="block";
         handleError("name_umpty");
       }
       if(!firstname){
         setMessage("Tous les champs sont obligatoires");
         message_element.style.display="block";
         handleError("first_umpty");
       }
    }

  }

  return (
    <div className="Container">
       <div className="RegisterForm">
           <h1 className="RegisterformTitle">Modifier le colloborateur</h1>
           <form onSubmit={modifier}>
               <div className="inputAddBlock">
                  <input id="nom" type="text" value={name} onChange={(e)=>setName(e.target.value)} className="textInput" placeholder="Nom du colloborateur"/>
                  <input id="prenom" type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)} className="textInput" placeholder="Prenom du colloborateur"/>
               </div>
               <input type="submit" className="btn-enregistrer" value="Modifier"/>
           </form>
           <div className="message">
             {message}
           </div>
       </div>
    </div>
  );
}

export default EditCollab;
