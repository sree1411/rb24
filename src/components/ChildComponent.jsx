import React from 'react'

const Anotther = ({onChildClick}) => {
     
      function incBtn(){
        onChildClick("increment")
      }

  return (
    <div>
        
          <h1> child component </h1>
            <button onClick={incBtn} >+ </button>
            <button >- </button>

    </div>
  )
}

export default Anotther
