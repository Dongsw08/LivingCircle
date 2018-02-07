import React , { Component } from 'react';
import { NavBar , Drawer , List } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import './header.scss';
import { selectCurrentPage } from '../../redux/actions/actions.jsx';


class Header extends Component{
       constructor(props){
           super(props);
           this.state={
           open:false,
           title:'',
           }
       }

   componentWillMount() {
       const { location:{ pathname }, dispatch } = this.props;
       let currentPath = pathname.replace("/","").toLowerCase();
      switch(currentPath){
           case "movies":{
               this.setState({title:"电影"});
               dispatch(selectCurrentPage('movie'));
               break;
           }

           case "shopping":{
            this.setState({title:"购物"});
            dispatch(selectCurrentPage('shopping'));
            break;
           }

           case "cart":{
            this.setState({title:"购物车"});
            dispatch(selectCurrentPage('cart'));
            break;
           }

           case "about":{
            this.setState({title:"关于"});
            dispatch(selectCurrentPage('about'));
            break;
           }

           default:{
            this.setState({title:"电影"});
            dispatch(selectCurrentPage('movie'));
           }
       } 
   } 

   onMenuClick=(e)=>{
        e.preventDefault();
        this.setState({open:!this.state.open});
        }

   onOpenchange = ()=>{
       this.setState({open:!this.state.open});
   }     

   onListClick(name){
      console.log(name);
      const { dispatch } = this.props;

      if(name === "电影"){
        this.props.history.push("/movies");
        dispatch(selectCurrentPage('movie'));
        this.setState({open:!this.state.open});
      }else if(name === "购物"){
        this.props.history.push("/shopping");
       dispatch(selectCurrentPage('shopping'));
       this.setState({open:!this.state.open});
      }else if(name === "关于"){
        this.props.history.push("/about");
       dispatch(selectCurrentPage('about'));
       this.setState({open:!this.state.open});
      }
      this.setState({title:name});
     

      
   }     
    
    
    render(){
        //菜单内容
       const arr=['电影','购物','关于'];
       
        const sidebar = arr.map((i,index)=>{
            let name = i;
            return(
                <List key={index}>
                    <List.Item key={index}  onClick={this.onListClick.bind(this,name)} multipleLine>{i}</List.Item>
                </List>
            )
        });

        return(
            <div className="my-nav-content" >  
                <NavBar iconName ={ null }
                className="my-navbar"
                leftContent="菜单"
                rightContent="已购项目"
                mode="dark"
                onLeftClick={
                    this.onMenuClick
                    }
                >{this.state.title}</NavBar>
                <Drawer
                  className='my-drawer'
                  style={{ minHeight: document.documentElement.clientHeight - 200 }}
                  enableDraHandle
                  contentStyle={{ height:'auto' }}
                  sidebar={sidebar}
                  open={this.state.open}
                  onOpenChange={this.onOpenchange}
                >{this.props.content}</Drawer>
            </div>
        );
        
        }
}


export default withRouter(connect()(Header));  