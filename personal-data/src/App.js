import React from 'react';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
     <Router>
         <div className="App">
             {/*<Router history={history}>*/}
             <Header />
             <div className='ui-container'>
                 <Switch>
                     <Route path='/' exact component={HomePage} />
                     <Route path='/finance' exact component={FinancePage} />
                     <Route path='/calendar' exact component={CalendarPage} />
                     <Route path='/lifting' exact component={LiftingPage} />
                     <Route path='/sports' exact component={SportsPage} />
                     <Route path='/sports/fantasy' exact component={Fantasy} />
                 </Switch>
             </div>
         </div>
     </Router>
  );
}

export default App;
