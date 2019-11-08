import React, {useState} from 'react'
import { connect } from 'react-redux'

import {postSmurf, updateName, updateAge, updateHeight} from '../../actions'

function SmurfForm(props){

    //////////REFACTOR BIG ISSUE #3

    // const [nameSmurf, setNameSmurf] = useState("")
    // console.log("name smurf", nameSmurf)

    // const handleNameInput = (e) => {
    //     setNameSmurf(e.target.value)
    // }
    //value={nameSmurf} onChange={handleNameInput}

    // const [ageSmurf, setAgeSmurf] = useState("")
    // console.log("age smurf", ageSmurf)

    // const handleAgeInput = (e) => {
    //     setAgeSmurf(e.target.value)
    // }
    //value={ageSmurf} onChange={handleAgeInput}

    // const [heightSmurf, setHeightSmurf] = useState("")
    // console.log("height smurf", heightSmurf)

    // const handleHeightInput = (e) => {
    //      setHeightSmurf(e.target.value) 
    // }
    //value={heightSmurf} onChange={handleHeightInput}

/////////////////

    const handleNewName = e => {
        props.updateName(e.target.value)
    }

    const handleNewAge = e => {
        props.updateAge(e.target.value)
    }

    const handleNewHeight = e => {
        props.updateHeight(e.target.value)
    }

    return (
        <div>
            <form  >
                <label name='smurf-name' >Smurf Name</label>
                <input type="text" name='smurf-name' value={props.name} onChange={handleNewName}/>

                <label name='smurf-age'>Smurf Age</label>
                <input type="text" name='smurf-age' value={props.age} onChange={handleNewAge}/>
            
                <label name='smurf-height'>Smurf Height</label>
                <input type="text" name='smurf-height' value={props.height} onChange={handleNewHeight}/>

                <button type="button" onClick={()=> props.postSmurf(props.name, props.age, props.height)}>Make a Smurf!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps ={
    postSmurf,
    updateName,
    updateAge,
    updateHeight
}

export default connect(state => state, mapDispatchToProps)(SmurfForm)