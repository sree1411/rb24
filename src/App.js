import './App.css';

function App() {

  
  const mobiles = [
    {
      name:"nokia", brand:"1122", price:1300
    },
    {
      name:"nokia", brand:"1123", price:1150
    },
    {
      name:"iphone", brand:"15pro", price:2000
    },
    {
      name:"iphone", brand:"15pro", price:2200
    },
    {
      name:"samsung", brand:"M1", price:1800
    },
    {
      name:"samsung", brand:"M2", price:1200
    },
    {
      name:"samsung", brand:"M2", price:12999
    }
  ]
  let totalPrice = mobiles.reduce((total, mobile)=>{
     return total + mobile.price
  }, 0)

 let formatedPrice = totalPrice.toLocaleString()

  return (
    <div className="App">
        <h1>Total Mobile Cost : {formatedPrice}</h1>
    </div>
  );
}

export default App;
