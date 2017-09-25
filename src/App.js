import React, { Component } from 'react';
import  Header  from './component/public/header';
import { BrowserRouter as Router , Route , Redirect ,Switch} from 'react-router-dom';
import './layout/app.scss';
import {MoviePage} from './pages/moviepage.jsx';





class App extends Component {
  render() {
    return (
      <Router>
        <div>  
           <Header content={
              <div>
              <Switch> 
                <Redirect exact from="/" to="/Movies"  /> 
                <Route exact path="/Movies" component={MoviePage} />
                <Route component={Nomatch} />
               </Switch> 
              </div> 
           }/>                     
         </div>  
      </Router>               
    );
  }
}

const Nomatch = ()=><div><br/><br/><br/>没有asjflsjaklfsdajlfjsdlkfjdslkfjaslfakjasdlfjdslfjsdlkfjdsalfasflksl</div>


export default App;
