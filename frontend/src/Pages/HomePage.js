import React from 'react';
import {Link} from 'react-router-dom';
import './PageStyles/globalCss.css';
import './PageStyles/HomePageCss.css';

function HomePage() {
  return (
    <div className="homeContainer">
        <div className="HomeContent">
           <div className="homeTitle">
               <p>Bienvenu</p>
               <span className="userName">User_name</span>
           </div>
           <div className="linkBlock">
               <Link to="" className="addLink Link">Nouveau colloborateur</Link>
               <Link to="" className="listLink Link">Liste de vos colloborateur</Link>
          </div>
        </div>
    </div>
  );
}

export default HomePage;
