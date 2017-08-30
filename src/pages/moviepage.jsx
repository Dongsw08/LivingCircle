import React,{ Component } from 'react';
//import { connect } from 'react-redux';

import { MovieContent } from '../component/moviecontent.jsx'

export class MoviePage extends Component{
  constructor(props){
    super(props);
    this.state={
      popupopen:false,
    }
  }
  
  mockdata() {
    //暂时模拟请求数据
    let mov1 = {
      src:'https://img1.doubanio.com/view/photo/raw/public/p2460006579.jpg',
      alt:'神奇女侠',
      title:'神奇女侠'
    }

    let mov2 = {
      src:'https://img1.doubanio.com/view/photo/raw/public/p2494950699.jpg',
      alt:'敦刻尔克',
      title:'敦刻尔克'
    }

    let mov3 = {
      src:'https://img3.doubanio.com/view/photo/raw/public/p2492917405.jpg',
      alt:'十万个冷笑话',
      title:'十万个冷笑话'
    }

    let mov4 = {
      src:'https://img1.doubanio.com/view/photo/raw/public/p2496794967.jpg',
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