import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
    
  }, []);


  

  function lowPriceBtn(){
    // let sortedValues =[...products].sort((a,b)=>a.price - b.price);
    // setProducts(sortedValues)
    // let res = products.sort((a,b)=>a.price - b.price);
    // console.log(res)
    // setProducts([...res])
    const sortedProducts = [...products];

  // Sort the cloned array by price ascending
  sortedProducts.sort((a, b) => a.price - b.price);

  // Update state with the sorted array
  setProducts(sortedProducts);
  
  }
 
 

  function HighPriceBtn(){
    let sortedValues =[...products].sort((a,b)=>b.price-a.price);
    setProducts(sortedValues)
 }

  
 
 



  return (
    <div className="App">


      {/* <button onClick={lowPriceBtn}> Low-High</button> */}
      <button onClick={()=>HighPriceBtn()} > High-Low</button>
      <button onClick={()=>lowPriceBtn()}> Low-High</button>

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>category</th>
            <th>description</th>
            <th>image</th>
            <th>price</th>
            <th>rating</th>
          </tr>
        </thead>
        <tbody>
          {
           products.length>0 && products.map((product)=>(
                  
                   <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td> <img src={product.image} alt="product.imagesra" width="20px"/> </td>
                    <td>{product.price}</td>
                     <td>{`Rate: ${product.rating.rate},  Count: ${product.rating.count}` }</td>
                    
                 </tr>
                   
                  
                   
            ))
          }
          <tr>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;


 //  async function fetchData(){
      
  //     try {
  //       let response = await fetch("https://fakestoreapi.com/products")
  //       if(!response.ok){
  //          throw new Error("net work error")
  //       }
  //       let data = await response.json();
  //       console.log("data", data)
  //       return data
  //     } catch (error) {
  //       throw new Error("invali input please check it")
  //     }


  //  }
  //  fetchData();



    // fetch("https://fakestoreapi.com/products").then((res)=> res.json()).then(data=> console.log(data, "bida")).catch((error)=>{
  //   console.log(error)
  // })

    //  useEffect(()=>{
   
  //  const fetchData  = async ()=>{
  //      try {
  //        let response = await axios.get("https://fakestoreapi.com/products")
  //        if (response.status !== 200) {
  //         throw new Error("Failed to fetch data");
  //       }
  //        let data = response.data;
  //        console.log("He", data)
  //        return data
  //      } catch (error) {
  //        console.log(error)
  //      }
  //  }
  //  fetchData()
  //  }, [])