import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSubscriber } from '../reducer/subscriberSlice'

const SubscriberForm = () => {

  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  function handleChange(e){
          setUsername(e.target.value)
  }

   function handleSubmit(e){
      e.preventDefault();
      dispatch(addSubscriber(username));
      setUsername("")
   }


  return (
    <>
    
    <form  onSubmit={handleSubmit}  >
    <input type="text" value={username} placeholder='enter the SubscriberName' onChange={handleChange} />
    <button type='submit' > submit</button>
    </form>
    
    
    </>
  )
}

export default SubscriberForm