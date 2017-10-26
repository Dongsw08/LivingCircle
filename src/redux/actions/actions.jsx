//export const REQUEST_MOVIE = 'REQUEST_MOVIE';
//export const REQUEST_SHOPPING = 'REQUEST_SHOPPING';

//export const RECIVE_MOVIE = 'RECIVE_MOVIE';
//export const RECIVE_SHOPPING = 'RECIVE_SHOPPING';

export const REQUEST_DATA = 'REQUEST_DATA';
export const RECIVE_DATA = 'RECIVE_DATA';

export const RENDER_TO_CART = 'RENDER_TO_CART';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

const changeCurrentPage = page =>({
    type: CHANGE_CURRENT_PAGE,
    page
})


const requestData = page =>({
    type:REQUEST_DATA,
    page
})

const renderToCart = (page,selectitem) => ({
    type:RENDER_TO_CART,
    page,
    selectitem
})

