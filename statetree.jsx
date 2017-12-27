state={
    currentPage: 'movie',
    contents:{   
        movie:{
            isFetching:false,
            items:[
                {
                    "src":"http://127.0.0.1:3000/assets/p2460006579.jpg",
                    "alt":"神奇女侠",
                    "title":"神奇女侠"
                },
                {
                    "src":"http://127.0.0.1:3000/assets/p2494950699.jpg",
                    "alt":"敦刻尔克",
                    "title":"敦刻尔克"
                },
                {
                    "src":"http://127.0.0.1:3000/assets/p2492917405.jpg",
                    "alt":"十万个冷笑话2",
                    "title":"十万个冷笑话2"
                },
                {
                    "src":"http://127.0.0.1:3000/assets/p2496795397.jpg",
                    "alt":"银魂",
                    "title":"银魂"
                }
            ]
        },
        shopping:{
            isFetching:false,
            items:[]
        }
    },
       cartItems:[
           {page:movie}
       ]
             
}



const getcontents = (state={
    isFetching:false,
    items:[]
},action)=>{
    switch(action.type){
        case REQUEST_CONTENT:
        return{
            ...state,
            isFetching:true
        }

        case RECIVE_CONTENT:
        return{
            isFetching:false,
            items:action.items
        }
    }
}



const contents = (state={ },action)=>{
    switch(action.type){
        case RECIVE_CONTENT:
        case REQUEST_CONTENT:
        {
            return {
                [action.page]:getcontents()
            }
        }
    }
}

const cartItems = (state={ },action)=>{
    switch(action.type){
        case RENDER_TO_CART:{
            return{
                ...state,
                [action.page]:{
                    [action.selctitem]:action.num
                }
            }
        }
    }
}

var cart = {
    movies:[{title:'神奇女侠',num:1},{title:'都是',num:2}],
    shopping:[{title:'白菜',num:1},{title:'带带',num:5}]
}

var action = {
    page:movies,
    title:'神奇女侠',
    num:6
}

function updateCart(state,action){
    
}