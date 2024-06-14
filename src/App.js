import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContactInformation from "./components/contacts/ContactInformation";
function App() {
  return (
    <>
     
     <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/contact" element={<ContactInformation />} />
      </Routes>
      
    </>
  );
}

export default App;
