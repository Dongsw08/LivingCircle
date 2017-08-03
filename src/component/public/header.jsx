import React , { Component } from 'react';
import { NavBar , Drawer , List } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Header extends Component{

   onMenuClick = ()=>{
        //console.log('youclick');
        if(menuactive){
            this.props.menuon = true;
        }
    }

    render(){
        return(
            <div>  
                <NavBar iconName ={ null }
                leftContent="菜单"
                rightContent="已购项目"
                mode="dark"
                onLeftClick={e => {
                    e.preventDefault()
                    this.onMenuClick()
                    }}
                >Movies</NavBar>
            </div>
        )
        
        }
}