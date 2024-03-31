import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      name: "iphone",
      count: 1,
      price: 10000,
      userId:0
    },
    {
      name: "oneplus",
      count: 1,
      price: 12000,
      userId:1,
    },
    {
      name: "realme",
      count: 1,
      price: 11000,
      userId:2,
    },
    {
      name: "redme",
      count: 1,
      price: 13000,
      userId:3
    },
  ]);

 const [totalvalue, setTotalvalue] = useState(46000)

 const totalAmount =()=>{
    let total = 0
    products.forEach((p)=>{
       total = total + (p.count * p.price)
    })
    setTotalvalue(total)
 }

useEffect(()=>{
  let total = 0
  products.forEach((p)=>{
     total = total + (p.count * p.price)
  })
  setTotalvalue(total)
}, [products])

  

const incbtn =(idd) => {
  setProducts(
    products.map((stat) =>
      stat.userId === idd ? { ...stat, count: stat.count + 1 } : stat
    )
    
  );
 
};

const decBtn =(i)=>{
  var temp=[...products]
    temp[i].count--
  setProducts([...temp])
 
}



  return <>
  <table className="table">
  <thead>
    <tr>
     <th scope="col">Number</th>
      <th scope="col">Mobile Name</th>
      <th scope="col">Price</th>
      <th scope="col">Count</th>
    </tr>
  </thead>
  <tbody>
    
    
      {
        products.map((product, i)=>{
          return <tr key={i}>
            <th scope="row">{i+1}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick={()=>{incbtn(i)}}> + </button>
                    {product.count}
                    <button disabled={product.count < 1}  onClick={()=>{decBtn(i)}}> - </button>
                    </td>
                 
                </tr>
        })
      }
      
      
     
  </tbody>
</table>
  
  <button onClick={totalAmount}> Total Amount :{totalvalue} </button>
  <h1> Total Amount :{totalvalue}  </h1>
  </>;
}
export default App;
