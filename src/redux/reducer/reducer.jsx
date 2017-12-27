import { REQUEST_DATA, RECIVE_DATA, RENDER_TO_CART, CHANGE_CURRENT_PAGE, REMOVE_FROM_CART, DECREASE_FROM_CART } from '../actions/actions.jsx';
import { combineReducers } from 'redux';

const changeCurrentPage = (state='movie',action) => {
    switch(action.type){
        case CHANGE_CURRENT_PAGE:
            return action.page;
    }
}
/*购物车 */
const idInCart = (state=[ ],action) => {
    let index = state.indexOf(action.id);
    switch(action.type){
        case RENDER_TO_CART:
        {
            if(index !==-1){
                return state;
            }else{
                return [...state,action.id];
            }
        }

        case REMOVE_FROM_CART:
        {
            if(index !==-1){
                let newState = [...state];
                newState.splice(index,1);
                return newState;
            }
        }

        default:
        return state;
    }
}

const amountInCart = (state={ },action)=>{    
    switch(action.type){
        case RENDER_TO_CART:
        {
            return {
                ...state,
                [state.id]: (state[action.id] || 0) + action.num
            }
        }

        case DECREASE_FROM_CART:
        {
            return{
                ...state,
                [state.id]: state[action.id] - 1
            }
        }

        case REMOVE_FROM_CART:
        {
            if(state.hasOwnProperty(action.id)){
                let newState = {...state};
                delete newState[action.id];
            }
        }
    }
}

/* 代理添加到content*/

const addToContent = (state={
    isFetching:false,
    items:[]
},action) => {
    switch(action.type){
        case REQUEST_DATA:
        return{
            ...state,
            isFetching:true
        }

        case RECIVE_DATA:
        return{
            ...state,
            isFetching:false,
            items:action.items
        }
    }
    
}

const content = (state={ },action)=>{
    switch(action.type){
        case REQUEST_DATA:
        case RECIVE_DATA:
        return{
            ...state,
            [action.page]:addToContent(state[action.page],action)
        }
    }
}
