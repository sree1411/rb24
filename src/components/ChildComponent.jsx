

function ChildComponent ({count, updateValues}){
    
    // const {count, updateValues} = props

     function incBtn(){
        updateValues("increment")
     }

     function decBtn(){
        updateValues("decrement")
     }


    return(
        <>
        <h1> child component ::{count}</h1>
        <button onClick={incBtn}> increment </button>
        <button onClick={decBtn}> decrement </button>
        </>
    )
}
export default ChildComponent;