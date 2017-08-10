import React , { Component } from 'react';
import { NavBar , Drawer , List } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Header extends Component{
   constructor(props){
       super(props);
       this.state={
           open:true,
           
        };
    }

   onMenuClick=()=>{
        this.setstate({open:!this.state.open});
        }

   onListClick=()=>{

   }     
    

    render(){
       const arr=['电影','购物','关于'];
       
        const sidebar = arr.map((i,index)=>{
            return(
                <List>
                    <List.Item key={index} onClick={this.onListClick} multipleLine>{i}</List.Item>
                </List>
            )
        })

        return(
            <div>  
                <NavBar iconName ={ null }
                leftContent="菜单"
                rightContent="已购项目"
                mode="dark"
                onLeftClick={e => {
                    e.preventDefault()
                    this.onMenuClick
                    }}
                >{this.props.title}</NavBar>
            </div>
        )
        
        }
}