import './App.css';
import MyGraphs from './components/graphs';

function App() {
  return (
    <div className="App">
      <div className='heading'>
        <h1 className="">Graph Chart in ReactJS</h1> 
        <h3 className="">Average Temperature(in Celsius) in Nairobi City between 1st March 2022 and 7th March 2022.</h3> 
      </div>
      <MyGraphs />
    </div>
  );
}

export default App;
