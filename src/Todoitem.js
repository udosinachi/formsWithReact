import React from "react"
import './App.css'

function Todoitem(props) {
    const completedStyle = {
        fontStyle: 'italic',
        color: 'red'
    }
    return (
        <div className="App">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
            />
        <p>{props.item.text}</p>
        </div>
    )
}

export default Todoitem