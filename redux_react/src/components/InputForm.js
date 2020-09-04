import React, {useState, Component} from 'react'
import {connect} from 'react-redux'

import * as actions from '../redux/actions/actions'



class InputForm extends Component {

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
 const newMovie = {...this.state.movie, title: e.target.value}
  this.setState({movie: newMovie})
  console.log(this.state.movie.title)
}
 handleSubmit = e =>{
   e.preventDefault()
 }
  render(){
    return(

      <div>
          <form onSubmit={this.handleSubmit}>
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
// const  mapStateToProps = (state, ownProps) =>{
// //   return{
// //     movie: this.state.movie.title
// //   }
// // }

export default InputForm