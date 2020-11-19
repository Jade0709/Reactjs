import { json } from "body-parser"
import {CREATEORDER,CLEARCART,CLEARORDER} from "../type";
export const createOrder = (order) => (dispatch) =>{
    fetch("/api/oders",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(order)
    }).then(res=>res.json())
    .then(data=>{
        dispatch({
            type:CREATEORDER,payload:data
        });
        localStorage.clear("cartItems");
        dispatch({type:CLEARCART})
    });
};
export const clearOrder = ()=>(dispatch=>{
    dispatch({type:CLEARORDER});
})