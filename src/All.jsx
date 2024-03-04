import React from 'react'
import Full_Stack_Development from './Full_Stack_Development'
import Data_Science from '../Data_Science'
import Cybersecurity from '../Cybersecurity'

function All() {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <Full_Stack_Development />
          </div>
          <div className='col-lg-4'>
          <Data_Science />
          </div>
          <div className='col-lg-4'>
          <Cybersecurity />
          </div>
        </div>
      </div>
    </div>
  )
}

export default All






           