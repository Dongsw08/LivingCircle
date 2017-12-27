import React ,{ Component }from 'react';
import { Card, WingBlank, WhiteSpace,Button} from 'antd-mobile';
//import {bindActionCreators} from 'redux';
//import { connect } from 'react-redux';

/*Components
export class MovieContent extends Component{
  constructor(props){
    super(props);
  }

  handleclick(){
    
  }

 render(){
  return (
  <div>
     <WingBlank size='lg'>
        <WhiteSpace size='lg' />
          <Card>
            <img className="moviePic" src={this.props.src} alt={this.props.alt} />
            <Card.Header title={this.props.title} extra={<Button  type="primary" inline onClick={this.handleclick} style={{ marginRight: '0.08rem' }}>购票</Button>} />
          </Card>
      </WingBlank>
  </div>
  )
 } 
}*/

export const MovieContent = ({props}) => {
  const {title, src, alt, handleBuyClick} = props;
  return(
    <div>
     <WingBlank size='lg'>
        <WhiteSpace size='lg' />
          <Card>
            <img className="moviePic" src={src} alt={alt} />
            <Card.Header title={title} extra={<Button  type="primary" inline onClick={handleBuyClick} style={{ marginRight: '0.08rem' }}>购票</Button>} />
          </Card>
      </WingBlank>
  </div>
  )
}