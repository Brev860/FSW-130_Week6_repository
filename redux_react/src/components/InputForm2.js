import React, {Component} from 'react'



class InputForm extends Component{


constructor(){
  super()
  this.state={
    show:{
      title:''
    }
  }
}

handleChange = e =>{
  e.preventDefault()
const newTitle = {...this.state.show, title: e.target.value}
this.setState({show: newTitle})
}

handleSubmit = e =>{
  e.preventDefault()
  
}

render(){
  return(

    <div>
        <form>
            <input
            type='text'
            name='title'
            placeholder='Enter Title here'
            value={this.state.show.title}
            onChange={this.handleChange}
            />
            <button>Enter</button>
        </form>

        <h2>Output Goes Here</h2>
    </div>
 )

}
     

}

export default InputForm