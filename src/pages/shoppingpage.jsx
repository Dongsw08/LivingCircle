import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { renderToCart } from '../redux/actions/actions.jsx';
import {ShoppingContent} from '../component/shoppingcontent.jsx';
import { Toast } from 'antd-mobile';


class ShoppingPage extends Component{
   handleBuyClick = (page,title,price,id) => {
       const { dispatch } = this.props;
       dispatch(renderToCart(page,title,price,id));
       Toast.success('购买成功',1);
   }
   
    render(){
        const { fruit,clothes} = this.props; 

        return(
            <div>
                <ShoppingContent clothes={clothes} fruit={fruit} handleBuyClick={this.handleBuyClick} />
            </div>
        )
    }
}

/*const getFruit = items => {
    return items.filter((i)=>{

    })
}
 
const getClothes = items => {
    const { items } = clothesItems;
    return items;
}
*/
const mapStateToProps = state => {
    const { changeCurrentPage,content:{fruit,clothes} } = state;
    
    //const fruit = state.content.shopping.items[0];
    //console.table(fruit.item);
    //console.log(clothesItems);
    return {
        currentPage:changeCurrentPage,
        fruit: fruit.items || [],
        clothes: clothes.items || []

       // fruit:fruitItems,
       // clothes:clothesItems        
    }
}

export default connect(mapStateToProps)(ShoppingPage);