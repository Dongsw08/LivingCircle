import React,{ Component } from 'react';
import 'whatwg-fetch';
//import { connect } from 'react-redux';

import { MovieContent } from '../component/moviecontent.jsx';

export class MoviePage extends Component{
  constructor(props){
    super(props);
    this.state={
      popupopen:false,
    }
  }
  
  mockdata() {
    //暂时模拟请求数据
    fetch('http://localhost:3000/assets/moviedata.json')
      .then(function(response){
        return response.json();
      }).then(function(json){
        console.log('parese json',json);
        console.log(json.movies[0]);
      }).catch(function(e){
        console.log('pasing falied',e);
      })


    let mov1 = {
      src:'http://127.0.0.1:3000/assets/p2460006579.jpg',
      alt:'神奇女侠',
      title:'神奇女侠'
    }

    let mov2 = {
      src:'http://127.0.0.1:3000/assets/p2494950699.jpg',
      alt:'敦刻尔克',
      title:'敦刻尔克'
    }

    let mov3 = {
      src:'http://127.0.0.1:3000/assets/p2492917405.jpg',
      alt:'十万个冷笑话',
      title:'十万个冷笑话'
    }

    let mov4 = {
      src:'http://127.0.0.1:3000/assets/p2496795397.jpg',
      alt:'银魂',
      title:'银魂'
    }
    
    let mockarr = [];
    mockarr.push(mov1,mov2,mov3,mov4);
    return mockarr;
  }

  popupopen = ()=>{
    console.log('a');
  }

  render(){
    let movarr = this.mockdata();
    let movdetail = movarr.map((curr,index)=>{
     return <MovieContent src={curr.src} alt={curr.alt} title={curr.title} key={index}  />
    })

    return <div className="content">{movdetail}</div>
  }
}