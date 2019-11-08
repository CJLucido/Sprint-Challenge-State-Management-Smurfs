import React from 'react'

import {connect} from 'react-redux'

import SmurfCard from "../molecules/SmurfCard"
import SmurfForm from '../molecules/SmurfForm'

function SmurfList(props){
console.log("this is smurfList props", props)
    return (
        <div>
            <SmurfForm/>
            {
                props.smurfs.map(item => (
                    <SmurfCard key={item.id} name={item.name} age={item.age} height={item.height}/>
                ))
            }

            
        </div>
    )
}



export default connect(state=>state, {})(SmurfList) 