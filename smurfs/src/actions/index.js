import axios from "axios"

export const LOAD_SMURF_SUCCESS = "LOAD_SMURF_SUCCESS"

export const LOAD_SMURF_FAILURE = "LOAD_SMURF_FAILURE"

export const LOADING_SMURF = "LOADING_SMURF"

export const MAKE_SMURF = "MAKE_SMURF"

export const NAME_SMURF = "NAME_SMURF"

export const AGE_SMURF = "AGE_SMURF"

export const HEIGHT_SMURF = "HEIGHT_SMURF"

//////////////////////////////////////////

export const smurfSuccess = (data) => 
({type: LOAD_SMURF_SUCCESS, payload: data})


export const smurfFailure = (error) => ({type: LOAD_SMURF_FAILURE, payload: error})


export const smurfLoading = () => ({type: LOADING_SMURF})

export const smurfMaking = (data) => ({type: MAKE_SMURF, payload: data })

export const smurfNaming = (data) => ({type: NAME_SMURF, payload: data})

export const smurfAging = (data) => ({type: AGE_SMURF, payload: data})

export const smurfHeighting = (data) => ({type: HEIGHT_SMURF, payload: data})

//////////////////////////////////////////////


export const fetchSmurfs = () => dispatch => {
    dispatch(smurfLoading())
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("this is response.data", res.data)
            dispatch(smurfSuccess(res.data))
        })
        .catch(error => {
           //console.log("this is error", error.message)
           dispatch(smurfFailure(error.message))
        })

}

export const postSmurf = (nameSmurf, ageSmurf, heightSmurf) => dispatch => {
    dispatch(smurfLoading())
    axios
        .post('http://localhost:3333/smurfs', 
       { name: nameSmurf,
            age: ageSmurf,
            height: heightSmurf}
        )
        .then(res => {
            //console.log("this is response.data", res.data)
            dispatch(smurfMaking(res.data))
        })
        .catch(error => {
           console.log("this is error", error.message)
           dispatch(smurfFailure(error.message))
        })

}

///////////////////////////////////

export const updateName = (name) =>dispatch =>{
    dispatch(smurfNaming(name))
}

export const updateAge = (age) =>dispatch =>{
    dispatch(smurfAging(age))
}

export const updateHeight = (height) =>dispatch =>{
    dispatch(smurfHeighting(height))
}