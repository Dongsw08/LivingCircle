import React,{ Component } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { renderToCart} from '../redux/actions/actions.jsx';
import { MovieContent } from '../component/moviecontent.jsx';
import { Toast } from 'antd-mobile';

class MoviePage extends Component{
 
  handleBuyClick = (page,selectitem,price,id) =>{
    const { dispatch } = this.props;
    dispatch(renderToCart(page,selectitem,price,id))
    Toast.success('购买成功',1);
  }

  render(){
    const { items } = this.props;

    let movdetail = items.map((mov) =>{
     return <MovieContent src={mov.src} alt={mov.alt} title={mov.title} key={mov.id} price={mov.price} handleBuyClick={this.handleBuyClick.bind(this,'movies',mov.title,mov.price,mov.id)}/>
    })

    return <div className="content">{movdetail}</div>
  }
}

/*const getContent = state => {
  
  return items;
}
*/
const mapStateToProps = state => {
  const { content:{movies} } = state;
  return {
    items:movies.items || []
  }  
}

export default connect(mapStateToProps)(MoviePage);