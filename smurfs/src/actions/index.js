import axios from "axios"

export const LOAD_SMURF_SUCCESS = "LOAD_SMURF_SUCCESS"

export const LOAD_SMURF_FAILURE = "LOAD_SMURF_FAILURE"

export const LOADING_SMURF = "LOADING_SMURF"

export const smurfSuccess = (data) => 
({type: "LOAD_SMURF_SUCCESS", payload: data})


export const smurfFailure = (error) => ({type: "LOAD_SMURF_FALIURE", payload: error})


export const smurfLoading = () => ({type: "LOADING_SMURF"})

export const fetchSmurfs = () => dispatch => {
    dispatch(smurfLoading())
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log("this is response", res)
        })
        .catch(error => {
            console.log("this is error", error)
        })

}