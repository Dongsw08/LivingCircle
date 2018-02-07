import React from 'react';
import { List,Button } from 'antd-mobile';

export const ShoppingContent = (props) => {
   const { handleBuyClick,fruit,clothes } = props;

    const fruitDetail = fruit.map(
        (fru) => {
            return <List.Item key={fru.id} extra={<Button type="primary" inline onClick={handleBuyClick.bind(this,'fruit',fru.title,fru.id)} style={{ marginRight: '0.08rem' }}>购买</Button>}>{fru.title}</List.Item>
        }
    )

    const clothesDetail = clothes.map(
        (clo) => {
            return <List.Item key={clo.id} extra={<Button type="primary" inline onClick={handleBuyClick.bind(this,'clothes',clo.title,clo.id)} style={{ marginRight: '0.08rem' }}>购买</Button>}>{clo.title}</List.Item>
        }
    )
  /* */  return (
        <div>
            <List renderHeader={'水果'} className="shoppinglist">
            {fruitDetail}
            </List>
            <List renderHeader={'服饰'} className="shoppinglist">
            {clothesDetail}
            </List>
        </div>
    )
}