import React, { Component } from 'react';
import  Header  from './component/public/header';
import { BrowserRouter as Router , Route} from 'react-router-dom';
import './layout/app.scss';

const MoviePage = () => 
  <div className="zaizhong">
    时代
    <div className="hama">
      水淀粉
    </div>
  </div>



class App extends Component {
  render() {
    return (
      <Router>
        <div>
           <Header />
           <hr />

           <Route exact path="/Movies" component={MoviePage} />
        </div>
      </Router>
    );
  }
}

export default App;
