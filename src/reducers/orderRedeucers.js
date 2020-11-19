const { CREATEORDER, CLEARORDER } = require("../type");

const orderReducer = (state={},action) =>{
    switch(action.type){
        case CREATEORDER:
            return{order:action.payload};
        case CLEARORDER:
            return{order:null};
        default:
            return state;
    }
};

export {orderReducer};