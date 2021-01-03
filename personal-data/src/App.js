import React from 'react';
import Home from './Components/Home/Home';
import Finance from "./Components/Finance/Finance";
import Calendar from "./Components/Calendar/Calendar";
import Fitness from "./Components/Fitness/Fitness";
import Sports from "./Components/Sports/Sports";
import Fantasy from './Components/Sports/Fantasy/Fantasy';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import './App.css';

function App() {
  const history = useHistory();

  return (
     <Router history={history}>
         <div className="App">
             <Header />
             <div className='ui-container'>
                 <Switch>
                     <Route path='/' exact component={Home} />
                     <Route path='/finance' exact component={Finance} />
                     <Route path='/calendar' exact component={Calendar} />
                     <Route path='/fitness' exact component={Fitness} />
                     <Route path='/sports' exact component={Sports} />
                     <Route path='/sports/fantasy' exact component={Fantasy} />
                 </Switch>
             </div>
         </div>
     </Router>
  );
}

export default App;
