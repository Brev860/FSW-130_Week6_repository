import React, {Component} from 'react'



class InputForm extends Component{


constructor(){
  super()
  this.state={
    movie:{
      title:''
    }
  }
}

handleChange = e =>{
  e.preventDefault()
const newTitle = {...this.state.movie, title: e.target.value}
this.setState({movie: newTitle})
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
            value={this.state.movie.title}
            onChange={this.handleChange}
            />
            <button>Enter</button>
        </form>
    </div>
 )

}
     

}

export default InputForm