

const initialState = {
    smurfs: [
        {"name":"Brainey","age":200,"height":"5cm","id":0}
    ]
}



export function reducer(state = initialState, action){
    switch(action.type){
        case "":
            return {
                smurfs: [...state.smurfs, action.payload]
            }
        default:
            return state
    }


}