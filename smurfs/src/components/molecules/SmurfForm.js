import React, {useState} from 'react'
import { connect } from 'react-redux'

import {postSmurf} from '../../actions'

function SmurfForm(props){

    const [nameSmurf, setNameSmurf] = useState("")
    console.log("name smurf", nameSmurf)

    const handleNameInput = (e) => {
        setNameSmurf(e.target.value)
    }

    const [ageSmurf, setAgeSmurf] = useState("")
    console.log("age smurf", ageSmurf)

    const handleAgeInput = (e) => {
        setAgeSmurf(e.target.value)
    }

    const [heightSmurf, setHeightSmurf] = useState("")
    console.log("height smurf", heightSmurf)

    const handleHeightInput = (e) => {
         setHeightSmurf(e.target.value) 
    }


    return (
        <div>
            <form  >
                <label name='smurf-name' >Smurf Name</label>
                <input type="text" name='smurf-name' value={nameSmurf} onChange={handleNameInput}/>

                <label name='smurf-age'>Smurf Age</label>
                <input type="text" name='smurf-age' value={ageSmurf} onChange={handleAgeInput}/>
            
                <label name='smurf-height'>Smurf Height</label>
                <input type="text" name='smurf-height' value={heightSmurf} onChange={handleHeightInput}/>

                <button type="button" onClick={()=> props.postSmurf(nameSmurf, ageSmurf, heightSmurf)}>Make a Smurf!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    postSmurf
}

export default connect(state => state, mapDispatchToProps)(SmurfForm)