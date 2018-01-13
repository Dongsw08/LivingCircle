import React,{ Component } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { fetchContent } from '../redux/actions/actions.jsx';

import { MovieContent } from '../component/moviecontent.jsx';

class MoviePage extends Component{
  constructor(props){
    super(props);
    this.state={
      popupopen:false,
    }
  }

  componentDidMount(){
    dispatch()
  }

  render(){
    let movdetail = movarr.map((curr,index)=>{
     return <MovieContent src={curr.src} alt={curr.alt} title={curr.title} key={index}  />
    })

    return <div className="content">{movdetail}</div>
  }
}

const getContent = state => {

}

const mapStateToProps = state => {
  
}

export default connect(

)(MoviePage)