import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './PageStyles/collobListCss.css';

function CollobList() {
   const [collaborateurs,setCollaborateurs]=useState([]);
   const [nom,setNom]=useState('');
   const history=useHistory();

    useEffect(()=>{
  //Afficher la liste des collaborateurs lorsque la page est chargé
    axios.get('http://localhost:5000/collab/listeCollab')
      .then((resultat)=>{
        console.log(resultat);
        setCollaborateurs(resultat.data);
      }).catch((err)=>console.log(err));
    },[]);

    //supprimer le produit
    const supprimer=(id)=>{
      axios.delete('http://localhost:5000/collab/deleteCollab/'+id)
      .then(()=>{
        setCollaborateurs(collaborateurs.filter((collaborateur)=>collaborateur.collab_id!==id));
      });
      }

    //rechercher le collaborateur
    const find=()=>{
      const valeur=nom;
      axios.get('http://localhost:5000/collab/recherche/'+valeur)
      .then((result)=>{
        console.log(result);
        setCollaborateurs(result.data);
      }).catch((err)=>console.log(err));
    }

  return (
    <div className="ListeConteneur">
       <div className="listeContent">
            <div className="Block">
                 <h1 className="title">La liste des collaborateurs</h1>
                 <form onSubmit={find} className="searchBlock">
                     <input type="text" className="search" value={nom} onChange={(e)=>setNom(e.target.value)} placeholder="nom du collaborateur" />
                     <input type="submit" className="btn_search" value="Rechercher"/>
                 </form>
                 <div className="HeadBlock">
                     <button className="lien" onClick={()=>history.push('/add')}>Nouveau collaborateur</button>
                 </div>
           </div>
            <table className="tableau">
                <thead>
                  <tr>
                    <td className="titreTableau">Nom du collaborateur</td>
                    <td className="titreTableau">Prenom du collaborateur</td>
                    <td className="titreTableau">Actions</td>
                  </tr>
                </thead>
            <tbody>
                  {
                       collaborateurs.map((collaborateur,index)=>{
                      return(
                       <tr key={index}>
                       <td>{collaborateur.nom}</td>
                       <td>{collaborateur.prenom}</td>
                       <td>
                           <button className="boutonAction modif" onClick={()=>{
                               const id=collaborateur.collab_id;
                               history.push('/Edit/'+id);
                           }}>Modifier</button>
                           {/*supprimer le collaborateur selon son id fornie en parametre dans le fonction supprimer*/}
                           <button className="boutonAction suppr" onClick={()=>{
                                 const id=collaborateur.collab_id;
                                 supprimer(id);
                               }
                           }>Supprimer</button>
                       </td>
                     </tr>
                     );
                   })
                 }
                </tbody>
            </table>
       </div>
    </div>
  );
}

export default CollobList;
