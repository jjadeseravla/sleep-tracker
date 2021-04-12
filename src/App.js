import Grid from './components/Grid.js';
import './App.css';
import { BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import SquareInfo from './components/SquareInfo.js';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path='/info'>
              <SquareInfo/>
            </Route>
            <Route path='/'>
              <Grid/>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
