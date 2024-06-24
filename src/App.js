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
    </div>
  );
}

export default App;
