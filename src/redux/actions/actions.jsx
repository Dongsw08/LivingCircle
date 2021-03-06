//export const REQUEST_MOVIE = 'REQUEST_MOVIE';
//export const REQUEST_SHOPPING = 'REQUEST_SHOPPING';

//export const RECIVE_MOVIE = 'RECIVE_MOVIE';
//export const RECIVE_SHOPPING = 'RECIVE_SHOPPING';



export const REQUEST_DATA = 'REQUEST_DATA';
export const RECIVE_DATA = 'RECIVE_DATA';

export const RENDER_TO_CART = 'RENDER_TO_CART';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREASE_FROM_CART = 'DECREASE_FROM_CART';

export const CHECKOUT = 'CHECKOUT';

export const selectCurrentPage = page =>({
    type: CHANGE_CURRENT_PAGE,
    page
})


export const requestData = page =>({
    type:REQUEST_DATA,
    page
})

export const reciveData = (page,data) =>({
    type:RECIVE_DATA,
    page,
    items:data
})

export const renderToCart = (page,selectitem,price,id) =>({
    //let currentpage = page.toUpperCase();
    //type:`RENDER_${currentpage}_TO_CART`,
    type:RENDER_TO_CART,
    page,
    selectitem,
    price,
    id
})

export const removeFromCart = (productId) => ({
    type:REMOVE_FROM_CART,
    id:productId
})

export const decreaseFromCart = (productId,currentNum) => ({
    type:DECREASE_FROM_CART,
    id:productId,
    num:currentNum
})


export const changeAmount = (productId,currentNum) => dispatch =>{
    if(currentNum <= 0){
        dispatch(removeFromCart(productId));
    }else{
        dispatch(decreaseFromCart(productId,currentNum));
    }
}
 
export const fetchContent = item =>
    dispatch => {
        dispatch(requestData(item));
        fetch(`http://localhost:8090/assets/${item}.json`)
        .then(response=>response.json())
        .then(json => dispatch(reciveData(item,json)))
    }

export const checkout = () => ({
    type:CHECKOUT
})
