

function Counter (props){
     console.log(props)


    return(
        <>
          <h1> child component </h1>
          <button onClick={props.incBtn}> + </button>
          <button onClick={props.decBtn}> - </button>
        </>
    )
}
export default Counter;