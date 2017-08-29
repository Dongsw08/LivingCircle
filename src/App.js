import React, { Component } from 'react';
import  Header  from './component/public/header';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './layout/app.scss';
import {MoviePage} from './container/moviepage.jsx';





class App extends Component {
  render() {
    return (
      <Router>
        <div>
           <Header content={
             <Route exact path="/Movies" component={MoviePage} />
           }/>

           
        </div>
      </Router>
    );
  }
}

export default App;
