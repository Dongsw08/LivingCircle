import { REQUEST_DATA, RECIVE_DATA, RENDER_TO_CART, CHANGE_CURRENT_PAGE } from '../actions/actions.jsx';
import { combineReducers } from 'redux';

const selectCurrentPage = (state='movie',action) => {
    switch(action.type){
        case CHANGE_CURRENT_PAGE:
            return action.page;
    }
}
