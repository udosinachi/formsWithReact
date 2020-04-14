import React from 'react'
import './App.css'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            firstname: '',
            lastname: '',
            gender: '',
            color: '',
            friendly: false,
            notfriendly: false,
            none: false

        }
        this.change = this.change.bind(this)
    }

    change(event){
        const {name, value, type, checked} = event.target
        type === 'checkbox' ? this.setState({
            [name]: checked
        })
        :
         this.setState({
              [name]: value})
    }

    render(){
        return(
            
            <form className='App'>
                <input type='text' 
                name='firstname' 
                placeholder='First Name' 
                onChange={this.change}/>
                <br/>

                <input type='text' 
                name='lastname' 
                placeholder='Last Name' 
                onChange={this.change}/>
                <br/>

                <textarea value={'something'}
                onChange={this.change}
                />
                <br/>

                <label>
                    <input 
                    type='checkbox'
                    name='friendly'
                    checked={this.state.friendly}
                    onchange={this.change}
                    />friendly
                </label>
                <br/>

                <label>
                    <input 
                    type='checkbox'
                    name='notfriendly'
                    checked={this.state.notfriendly}
                    onchange={this.change}
                    />not friendly
                </label>
                <br/>

                <label>
                    <input 
                    type='checkbox'
                    name='none'
                    checked={this.state.none}
                    onchange={this.change}
                    />none
                </label>
                <br/>

                <label>
                    <input 
                    type='radio'
                    name='gender'
                    value='male'
                    checked={this.state.gender === 'male'}
                    onchange={this.change}
                    />Male
                </label>
                <br/>

                <label>
                    <input 
                    type='radio'
                    name='gender'
                    value='female'
                    checked={this.state.gender === 'female'}
                    onchange={this.change}
                    />Female
                </label>
                <br/>

                <label>Your color:</label>
                <select 
                    name='color'
                    value={this.state.color}
                    onChange={this.change}
                >
                    <option value='blue'>Blue</option>
                    <option value='black'>Black</option>
                    <option value='red'>Red</option>
                    <option value='purple'>Purple</option>
                </select>


                <h1>{this.state.firstname} {this.state.lastname}</h1>
                <h2>{this.state.color} is my favorite color</h2>
            </form>
        )
    }
}

export default App