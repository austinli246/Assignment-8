
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './component/Home'
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27
    }
  }
  render() { 
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </Router>
    
    );
  }
  
}

export default App;
