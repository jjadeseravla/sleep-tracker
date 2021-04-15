import Grid from './components/Grid.js';
import './App.css';
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import SquareInfo from './components/SquareInfo.js';
import { UserContext } from './UserContext';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <UserContext.Provider value="hello from context">
          <Switch>
            <Route path='/info/:id'>
              <SquareInfo/>
            </Route>
            <Route path='/'>
              <Grid/>
            </Route>
          </Switch>
          </UserContext.Provider>
        </header>
      </div>
    </Router>
  );
}

export default App;
