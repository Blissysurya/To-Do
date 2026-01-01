import React from 'react'
import {RiPencilLine} from '@remixicon/react'

const App = () => {
  return (
    <>
      <div className='h-screen w-full overflow-hidden bg-black'>
        <div id='input-div' className='flex  mt-4'>
          <textarea className='m-auto h-96 w-10/11 bg-white rounded-2xl focus:outline-none focus:ring-0 resize-none p-10' type='text' id='input-box' placeholder='Enter your task here' />
          <RiPencilLine className='bg-green-600 absolute mt-80 mr-10' />
        </div>
      </div>
    </>
  )
}

export default App