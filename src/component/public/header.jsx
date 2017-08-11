import React , { Component } from 'react';
import { NavBar , Drawer , List } from 'antd-mobile';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import './header.scss'


export class Header extends Component{
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

   onListClick(num){
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
      console.log(num);
      this.setState({title:num});
   }     
    
    
    render(){
       const arr=['电影','购物','关于'];
       
        const sidebar = arr.map((i,index)=>{
            let num = i;
            return(
                <List key={index}>
                    <List.Item key={index}  onClick={this.onListClick.bind(this,num)} multipleLine>{i}</List.Item>
                </List>
            )
        });

        return(
            <div>  
                <NavBar iconName ={ null }
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
                >
                 Click up
                </Drawer>
            </div>
        );
        
        }
}