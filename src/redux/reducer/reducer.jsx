import { REQUEST_DATA, RECIVE_DATA, RENDER_TO_CART, CHANGE_CURRENT_PAGE, REMOVE_FROM_CART, DECREASE_FROM_CART,CHECKOUT } from '../actions/actions.jsx';
import { combineReducers } from 'redux';

const changeCurrentPage = (state='movie',action) => {
    switch(action.type){
        case CHANGE_CURRENT_PAGE:
        {
            return action.page;
        }  
        default: return state;    
    }
}
/*购物车 */
const idInCart = (state={ },action) => {
    //let index = state.indexOf(action.id);
    switch(action.type){
        case RENDER_TO_CART:
        {
           /*if(index !== -1){
                return state;
            }
            return [...state,action.id];*/ 
            return{
                ...state,
                [action.id]:{title:action.selectitem,price:action.price}
            }

        }

        case REMOVE_FROM_CART:
        {
            let newState = {...state};
            if(state.hasOwnProperty(action.id)){
                delete newState[action.id];
            }

            return newState;
        }

        case CHECKOUT:
        {
            return {};
        }

        default: return state;
    }
}

const amountInCart = (state={ },action) => {    
    switch(action.type){
        case RENDER_TO_CART:
        {
            return {
                ...state,
                [action.id]: (state[action.id] || 0) + 1
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
            let newState = {...state};
            if(state.hasOwnProperty(action.id)){
                delete newState[action.id];
            }

            return newState;
        }

        case CHECKOUT:
        {
            return {}
        }

        default: return state;
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

        default: return state;
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

        default: return state;
    }
}

const reducers = combineReducers({
    changeCurrentPage,
    idInCart,
    amountInCart,
    content    
})

export default reducers;
