import React, { Component } from 'react';
import  Header  from './component/public/header';
import { BrowserRouter as Router , Route , Redirect ,Switch} from 'react-router-dom';
import './layout/app.scss';
import MoviePage from './pages/moviepage.jsx';
import  ShoppingPage   from './pages/shoppingpage.jsx';
import Cartpage from './pages/cartpage.jsx';
import { About } from './pages/about.jsx';




class App extends Component {
  render() {
    return (
      <Router>
        <div>  
           <Header content={
              <div>
              <Switch> 
                <Redirect exact from="/" to="/movies"  /> 
                <Route exact path="/movies" component={MoviePage} />
                <Route exact path="/shopping" component={ShoppingPage} />
                <Route exact path="/cart" component={Cartpage} />
                <Route exact path="/about" component={About} />
                <Route component={Nomatch} />
               </Switch> 
              </div> 
           }/>                     
         </div>  
      </Router>               
    );
  }
}

const Nomatch = ()=><div><br/><br/><br/>Nothing here</div>


export default App;
