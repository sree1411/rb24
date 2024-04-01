import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
       <Counter initvalue={0} person ="sreekanth"/>
       <Counter initvalue={0} person ="virat"/>
       <Counter initvalue={0} person ="dhoni"/>
       <Counter initvalue={0} person ="yuvraj"/>
    </div>
  );
}

export default App;

/// this is the one we create the componet differnt persons can create the differnt 
//score board and increase there values with the props communication