import React , { Component } from 'react';
import { NavBar , Drawer , List } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import './header.scss'


class Header extends Component{
       constructor(props){
           super(props);
           this.state={
           open:false,
           title:'电影',
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
      
      if(name === "电影"){
        this.props.history.push("/Movies");
      }else if(name === "购物"){
        this.props.history.push("/Shopping");
      }else if(name === "关于"){
        this.props.history.push("/About");
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
                  style={{ minHeight: document.documentElement.clientHeight}}
                  enableDraHandle
                  //contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                  sidebar={sidebar}
                  open={this.state.open}
                  onOpenChange={this.onOpenchange}
                >{this.props.content}</Drawer>
            </div>
        );
        
        }
}

export default withRouter(Header);  