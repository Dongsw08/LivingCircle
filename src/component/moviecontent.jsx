import React ,{ Component }from 'react';
import { Card, WingBlank, WhiteSpace,Button} from 'antd-mobile';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

/*Components*/
class MovieContent extends Component{
  constructor(props){
    super(props);
    this.state={
      popupopen:false,
    }
  }

  componentDidMount() {
    
  }

 render(){
  return (
  <div>
     <WingBlank size='lg'>
        <WhiteSpace size='lg' />
          <Card>
            <img className="moviePic" src={props.src} alt={props.alt} />
            <Card.Header title={props.title} extra={<Button  type="primary" inline style={{ marginRight: '0.08rem' }}>购票</Button>} />
          </Card>
      </WingBlank>
  </div>
  )
 } 
}