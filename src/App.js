import "./App.css";

function App() {
  const mobiles = [
    {
      name: "nokia",
      brand: "1122",
      price: 1300,
    },
    {
      name: "nokia",
      brand: "1123",
      price: 1150,
    },
    {
      name: "iphone",
      brand: "15pro",
      price: 2000,
    },
    {
      name: "iphone",
      brand: "15pro",
      price: 2200,
    },
    {
      name: "samsung",
      brand: "M1",
      price: 1800,
    },
    {
      name: "samsung",
      brand: "M2",
      price: 1200,
    },
    {
      name: "samsung",
      brand: "M2",
      price: 12999,
    },
  ];

  //total price of allMobiles

  let totalPrice = mobiles
    .reduce((total, mobile) => {
      return total + mobile.price;
    }, 0)
    .toLocaleString();
  // let localPriceTag = totalPrice.toLocaleString()

  //No.of Brand list

  let result = (acc,attr) => {
    if (acc[attr]) {
      acc[attr]++;
    } else {
      acc[attr] = 1;
    }
    return acc;
  }


  let totalBrandList = mobiles.map((m)=>m.brand).reduce(result, {});
  let totalMobileList = mobiles.map((m)=>m.name).reduce(result, {});


  let nokia = ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', "16.76 cm (6.6 inch) HD+ Display", "16MP Rear Camera | 5MP Front Camera", "5000 mAh Battery", "5G"]
  let samsu = ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', "15.76 cm (6.6 inch) HD+ Display", "16MP Rear Camera | 15MP Front Camera", "5000 mAh Battery", "5G"]
  let jio =  ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', "14.76 cm (6.6 inch) HD+ Display", "16MP Rear Camera | 5MP Front Camera", "5000 mAh Battery", "5G"]
  

  

  function featuresMOb(...array){    
        return array.reduce((first, second)=> [...new Set(first.concat(second))])
  }
  let allFeatures = featuresMOb(nokia, samsu, jio)
 


  function filterFeature(...array){
      return array.reduce((first,second)=>{
            return first.filter((f)=>second.includes(f))
       })
  }
  let commonFeature = filterFeature(nokia, samsu, jio)
 
   

  return (
    <div className="App">
      <p> Normal Table to display the data</p>
      <table style={{ width: "20px", border:"1px solid red" }} className="table">
        <thead>
          <tr>
            <th> Name </th>
            <th> Brand Models </th>
            <th> Price </th>
          </tr>
        </thead>
        <tbody>
          {mobiles.length > 0 &&
            mobiles.map((mobile, index) => (
              <tr key={index}>
                <td>{mobile.name}</td>
                <td>{mobile.brand}</td>
                <td>{mobile.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h1>Total Price Of All Mobiles:{totalPrice}</h1>
      <table className="table" style={{ width: "50px" }}>
        <thead>
          <tr>
            <th>Brand Model</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(totalBrandList).map((name, index) => (
            <>
              <tr key={index}>
                <td>{name} </td>
                <td>{totalBrandList[name]} 
                   
                </td>

              </tr>
            </>
          ))}
        </tbody>
      </table>
      <table className="table" style={{ width: "20px" }}>
        <thead>
          <tr>
            <th>Mobiles</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(totalMobileList).map((name, index) => (
            <>
              <tr key={index}>
                <td>{name} </td>
                <td>{totalMobileList[name]} 
                   
                </td>

              </tr>
            </>
          ))}
        </tbody>
      </table>

       <p> All Features :{
        allFeatures.map((el, index)=>{
             return <p>{el}</p>
        })
       }</p>
       
       <h3>Common Feature :
       {
        commonFeature.map((el, index)=>{
             return <p key={index}>{el}</p>
        })
       }
           
        
        </h3>

    </div>
  );
}

export default App;
