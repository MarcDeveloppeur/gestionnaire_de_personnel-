import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import './PageStyles/collobListCss.css';

function CollobList() {
   const [collaborateurs,setCollaborateurs]=useState([]);
   const [valeur,setValeur]=useState('');
   const history=useHistory();

    useEffect(()=>{
  //Afficher la liste des collaborateurs lorsque la page est chargé
      axios.get('http://localhost:5000/product/getAll')
      .then((resultat)=>{
        setCollaborateurs(resultat.data);
      });
    },[]);
    //supprimer le produit
    const supprimer=(id)=>{
      axios.delete('http://localhost:5000/product/deleteOne/'+id)
      .then(()=>{
        setCollaborateurs(collaborateurs.filter((collaborateur)=>collaborateur._id!==id));
      });
      }
    //rechercher le collaborateur
    const rechercher=(valeur)=>{
      axios.get('http://localhost:5000/product/deleteOne/')
      .then((result)=>{
        setCollaborateurs(result);
      });
    }

  return (
    <div className="ListeConteneur">
       <div className="listeContent">
            <h1 className="title">La liste des collaborateurs</h1>
            <div className="searchBlock">
                <input type="text" className="search" placeholder="nom du collaborateur" />
                <button onClick={rechercher(valeur)} className="btn_search">rechercher</button>
            </div>
            <div className="HeadBlock">
                <button className="lien" onClick={()=>history.push('/add')}>Nouveau collaborateur</button>
            </div>
            <table className="tableau">
                <thead>
                    <td className="titreTableau">Nom du collaborateur</td>
                    <td className="titreTableau">Prenom du collaborateur</td>
                    <td className="titreTableau">Actions</td>
                </thead>
            <tbody>
                     {collaborateurs.map((collaborateur,index)=><tr key={index}>
                       <td>{collaborateur.nom}</td>
                       <td>{collaborateur.prenom}</td>
                       <td>
                           <button className="boutonAction modif" onClick={()=>{
                               const id=collaborateur._id;
                               history.push('/EditerColloborateur/'+id);
                           }}>Modifier</button>
                           {/*supprimer le collaborateur selon son id fornie en parametre dans le fonction supprimer*/}
                           <button className="boutonAction suppr" onClick={()=>{
                                 const id=collaborateur._id;
                                 supprimer(id);
                               }
                           }>Supprimer</button>
                       </td>
                     </tr>)}
                </tbody>
            </table>
       </div>
    </div>
  );
}

export default CollobList;
