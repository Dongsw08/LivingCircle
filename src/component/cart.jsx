import React from 'react'
import { List, Button, Stepper } from 'antd-mobile'

export const Cart = ({idInCart,total,amountInCart,checkout,onChange}) => {
    let cartContent = []
    if(total !== 0){
        for(let id in amountInCart){
            cartContent.push(
                <List.Item key = {id} extra={<Stepper style={{ width: '100%', minWidth: '2rem' }} showNumber value={amountInCart[id]} onChange={onChange.bind(this,id)} useTouch={false} />}>
                    {idInCart[id].title}
                </List.Item>
            )
        }
    }else{
        cartContent = <List.Item>购物车是空的</List.Item>
    }
    
    return (
        <div>
            <List renderHeader = {'购物车'} className = "cartlist">
            {cartContent}
            </List>
            <List renderHeader = {'总计'} className = "cartlist" >
                <List.Item key = 'total' extra={<Button type="primary" inline onClick={checkout} style={{ marginRight: '0.08rem' }}>结算</Button>} >{`总计：  ${total} 元`} </List.Item>
            </List>
        </div>
    )
}