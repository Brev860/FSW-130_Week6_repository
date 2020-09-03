import React, {useState} from 'react'



const InputForm = () =>{


const [input, setInput] = useState('')
console.log(input)

const handleSubmit = (e) =>{
  e.preventDefault()
  

}


     return(

        <div>
            <form>
                <input
                type='text'
                name='title'
                placeholder='Enter Title here'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </div>
     )

}

export default InputForm