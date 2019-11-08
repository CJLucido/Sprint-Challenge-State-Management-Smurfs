

import {
    LOAD_SMURF_SUCCESS,
    LOAD_SMURF_FAILURE,
    LOADING_SMURF,
    MAKE_SMURF,
    NAME_SMURF,
    AGE_SMURF,
    HEIGHT_SMURF
                } from "../actions"



const initialState = {
    smurfs: [
        //{"name":"Brainey","age":200,"height":"5cm","id":0} BIG ISSUE #1
    ],
    isFetching: false,
    error: null,
    name: "hi",
    age: "",
    height: ""
}



export function reducer(state = initialState, action){
    switch(action.type){
        case LOAD_SMURF_SUCCESS:
            // let noDoubles = action.payload
            //     console.log("this is noDoubles", noDoubles)
            return {
                smurfs: action.payload,
                // [...state.smurfs].concat(noDoubles) BIG ISSUE #2
                isFetching: false,
                error: null
            }
         case LOAD_SMURF_FAILURE:
            return {
                smurfs: [...state.smurfs],
                isFetching:false,
                error: action.payload
            }
         case LOADING_SMURF:
            return {
                smurfs: [...state.smurfs],
                isFetching: true,
                error: null
            }
        case MAKE_SMURF:
            return {
                smurfs: [...state.smurfs].concat(action.payload),
                isFetching: false,
                error: null,

            }
        case NAME_SMURF:
            console.log("this is state.name",state.name)
            return {
                ...state,
                name: action.payload
            }
        case AGE_SMURF:
            return{
                ...state,
                age: action.payload
            }
        case HEIGHT_SMURF:
            return{
                ...state,
                height: action.payload
            }
        default:
            return state
    }


}