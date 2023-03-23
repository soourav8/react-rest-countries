
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

// function LoadCountries(){
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every Countries of the World</h1>
//       <h3>Available Countries {countries.length}</h3>
//       {
//        countries.map(country => <Country name={country.name.common} population={country.population}></Country>) 
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div style={{border: '3px solid goldenrod', margin:'50px', padding: '20px', borderRadius: '15px'}}>
//       <h3>Name: {props.name}</h3>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }

export default App;
