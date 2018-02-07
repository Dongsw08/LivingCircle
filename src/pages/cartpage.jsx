import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List,Button } from 'antd-mobile;'

class CartPage extends Component{
    render(){
        <div>
            <List renderHeader={'购物车'} className="cartlist">
                
            </List>
            <List renderHeader={'总价'} className="cartlist">
                
            </List>
        </div>
    }
}

const getCartitems = state => {
    const { amountInCart } = state;
    let items = [];
    for(let item in amountInCart){
        items.push(item);
    }
    return items;
}

const getTotal = state => {
    const { amountInCart, idInCart } = state;
    
}

const mapStateToProps = state => ({
    items:getCartitems(state),
    total:getTotal(state)    
})

export default connect()(CartPage);