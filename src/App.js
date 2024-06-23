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

 let formatedPrice = totalPrice.toLocaleString();


 //to find out how many companies are there

 let companyNames = mobiles.reduce((acc, mobile)=>{
   
  if(acc[mobile.name]){
    acc[mobile.name]++
  }else{
    acc[mobile.name] = 1
  }
  return acc;

 }, {});
  
//  console.log(Object.keys(companyNames).map((el)=>(console.log(el), console.log(companyNames))))

 let brandNames = mobiles.reduce((acc, mobile)=>{
   
  if(acc[mobile.brand]){
    acc[mobile.brand]++
  }else{
    acc[mobile.brand] = 1
  }
  return acc;

 }, {})


let nokia = ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', "16.76 cm (6.6 inch) HD+ Display", "16MP Rear Camera | 5MP Front Camera", "5000 mAh Battery"]
let samsu = ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', "15.76 cm (6.6 inch) HD+ Display", "16MP Rear Camera | 15MP Front Camera", "5000 mAh Battery"]
let jio =  ['4 GB RAM | 64 GB ROM | Expandable Upto 1 TB', "14.76 cm (6.6 inch) HD+ Display", "16MP Rear Camera | 5MP Front Camera", "5000 mAh Battery"]



function allFeatures(...array){
     return array.reduce((first, second)=> [...new Set(first.concat(second))] )
}
let totalFeatureMOb = allFeatures(nokia, samsu, jio);


function fewFeatures(...array){
      return array.reduce((first, second)=>{
           return first.filter((f)=> second.includes(f))
       })
}
let ppp = fewFeatures(nokia, samsu, jio)





  return (
    <div className="App">
        <h1>Total Mobile Cost : {formatedPrice}</h1>
        <h1>Company Names are : {JSON.stringify(companyNames)}</h1>
        <h1>List of brands are : {JSON.stringify(brandNames, 2, null)}</h1>
        <h1>Features of all Mobiles ; {`${totalFeatureMOb}`} <br/></h1>
        <h1> hello:{ppp}</h1>
        
        
        {Object.keys(companyNames).map((name, index) => (
              <>
             
            <tr key={index}>
              <td>{name}</td>
              <td>{companyNames[name]}</td>
            </tr>
            </>
          ))}

{Object.keys(brandNames).map((name, index) => (
              <>
             
            <tr key={index}>
              <td>{name}</td>
              <td>{brandNames[name]}</td>
            </tr>
            </>
          ))}
{Object.keys(totalFeatureMOb).map((name, index) => (
              <>
             
            <tr key={index}>
              <td>{index+1}</td>
              <td>{totalFeatureMOb[name]}</td>
            </tr>
            </>
          ))}
          
    </div>
    
    
  );
}

export default App;
