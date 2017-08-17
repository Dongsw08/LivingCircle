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

   onMenuClick=()=>{
        this.setState({open:!this.state.open});
        }

   onListClick(name){
       //this.setState{}
       /*switch(index){
           case 0 :
           return ()=>{console.log(0);};
           case 1 :
           return ()=>{console.log(1);};
           case 2 :
           return ()=>{console.log(2);};
           default :
           break;
       }*/
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
            //let comp = '/movies';
           /* switch (index){
                case 0:
                comp = "/movies";
                break;
                
                case 1:
                comp = "/shopping";
                break;
                
                case 2:
                comp = "/about";
                break;
                
                default:
                break;
            }*/
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
                    //e.preventDefault()
                    this.onMenuClick
                    }
                >{this.state.title}</NavBar>
                <Drawer
                  className='my-drawer'
                  style={{ minHeight: document.documentElement.clientHeight - 200}}
                  enableDraHandle
                  contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                  sidebar={sidebar}
                  open={this.state.open}
                  onOpenChange={this.onMenuClick}
                ></Drawer>
            </div>
        );
        
        }
}

export default withRouter(Header);  