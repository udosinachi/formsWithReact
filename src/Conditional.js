import React from 'react'

function Conditional(props) {
    if(props.isLoading){
        return(
            <h1>True</h1>
        )
    }else {
        return(
            <h1>False</h1>
        )
    }
    return (
        <h1>okay</h1>
    )
}

export default Conditional