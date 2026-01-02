import React, { useState } from 'react'
import { RiPencilLine, RiRefreshLine, RiDeleteBinLine } from '@remixicon/react'

const App = () => {

  let [tasks, setTasks] = useState([])
  let [input, setInput] = useState('')

  function handleInput(e) {
    setInput(e.target.value)
  }

  function writeNote() {
    if (input.trim() !== '') {
      setTasks([...tasks, input])
      setInput('')
      localStorage.setItem('tasks', JSON.stringify([...tasks, input]))
    }
  }

  let todos = JSON.parse(localStorage.getItem('tasks'));

  function deleteHandler(idx){
    let newTodos = JSON.parse(localStorage.getItem('tasks'));
    newTodos.splice(idx, 1);
    setTasks(newTodos);
    localStorage.setItem('tasks', JSON.stringify(newTodos));
    todos = JSON.parse(localStorage.getItem('tasks'));
  }

  return (
    <>
      <div className='h-screen w-full  bg-black'>
        <div id='input-div' className='flex flex-row-reverse bg-black pt-4 pointer-events-auto'>
          <textarea onChange={(e) => { handleInput(e) }} className='m-auto h-96 w-10/11 bg-white rounded-2xl focus:outline-none focus:ring-0 resize-none p-10' type='text' id='input-box' placeholder='Enter your task here' value={input} />

          <RiPencilLine onClick={writeNote} className='text-green-700 absolute mt-80 mr-30' />

          <RiRefreshLine className='text-green-700 absolute mt-80 mr-40' value={input}
            onClick={() => { setInput('') }}
          />
        </div>


        <div id='card-div' className='flex h-auto m-auto p-10 w-10/11 pointer-events-auto'>




          {todos.map((task, idx) => {
            return(
            <div key={idx} className='h-auto w-auto relative'>

              <div  className=' m-4 p-4 bg-white rounded-2xl w-60 h-60 overflow-auto'>
                {task}
              </div>
              <RiDeleteBinLine  className='text-red-500 absolute bottom-6 right-6'
                onClick={()=>{deleteHandler(idx)}}
              />
            </div>
            )
          })
          }
        </div>

      </div>


    </>
  )
}

export default App