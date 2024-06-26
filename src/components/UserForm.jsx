import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addSubscriber} from '../reducer/subscriberSlice'

const UserForm = () => {

  const dispatch = useDispatch();

  const [userName, setUserName] = useState('')

  function handleChange(e){
          setUserName(e.target.value)
  }

  function handleSubmit(e){
      e.preventDefault()
      dispatch(addSubscriber(userName))
      setUserName('')
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
        <input type="text" value={userName} placeholder='Enter the name' onChange={handleChange}  />
        <button type='submit'> Submit </button>
        </form>
      
      </>
  )
}

export default UserForm