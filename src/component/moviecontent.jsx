import React from 'react';
import { Card, WingBlank, WhiteSpace,Button} from 'antd-mobile';

export const MovieContent = (props) => {
  const {title, src, alt, handleBuyClick, price} = props;
  return(
    <div>
     <WingBlank size='lg'>
        <WhiteSpace size='lg' />
          <Card>
            <img className="moviePic" src={src} alt={alt} />
            <Card.Header title={`${title}  -  ${price}元`} extra={<Button  type="primary" inline onClick={handleBuyClick} style={{ marginRight: '0.08rem' }}>购票</Button>} />
          </Card>
      </WingBlank>
  </div>
  )
}