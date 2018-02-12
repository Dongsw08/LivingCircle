import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Cart } from '../component/cart.jsx';
import { checkout, decreaseFromCart } from '../redux/actions/actions.jsx'

class CartPage extends Component{
    checkout = () => {
        const { dispatch } = this.props;

        dispatch(checkout());
    }

    onChange = (id,currentnum) => {
        const { dispatch } = this.props;
        dispatch(decreaseFromCart(id,currentnum));
    }

    render(){
        const { idInCart,amountInCart,total } = this.props;

        return(
        <div>
            <Cart idInCart={idInCart} amountInCart={amountInCart} total={total} checkout={this.checkout} onChange={this.onChange} />
        </div>
        )
    }
}


const getTotal = (idInCart,amountInCart) => {
   let total = 0;
    if(idInCart || amountInCart !== {} || { }){
        for(let id in amountInCart){
            total += idInCart[id].price * amountInCart[id];
        }
    }

    return total;
}

const mapStateToProps = state => {
    const { idInCart,amountInCart } = state;
    return {
        idInCart,
        amountInCart,
        total:getTotal(idInCart,amountInCart)
    }    
}

export default connect(mapStateToProps)(CartPage);