import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ConnectPage from './Pages/ConnectPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import PageNotFound from './Pages/PageNotFound';
import AddColloborateur from './Pages/addColloborateur';
import CollobList from './Pages/collobList';

function App() {
  return (
    <div className="App">
         <Router>
            <Route exact path="/" component={ConnectPage}/>
            <Route path="/Register" component={RegisterPage}/>
            <Route path="/Home" component={HomePage}/>
            <Route path="/add" component={AddColloborateur}/>
            <Route path="/List" component={CollobList}/>
            <Route component={PageNotFound}/>
         </Router>
    </div>
  );
}

export default App;
