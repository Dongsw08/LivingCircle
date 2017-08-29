import React from 'react';
import { Card, WingBlank, WhiteSpace,Button} from 'antd-mobile';

/*Components*/
export const MovieContent = (img,cb,key) =>
  <div onClick ={()=>console.log(img)} key={key}>
   <WingBlank size='lg'>
    <WhiteSpace size='lg' />
      <Card>
        <img className="moviePic" src={img.img.src} alt={img.img.alt} />
        <Card.Header title={img.img.title} extra={<Button  type="primary" inline style={{ marginRight: '0.08rem' }}>购票</Button>} />
      </Card>

  </WingBlank>
  </div>