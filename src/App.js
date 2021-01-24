import logo from './logo.svg';
import './App.css';
import AxiosTest from "./components/AxiosTest"
import React from 'react'
import CurrentWeather from "./components/CurrentWeather"
import Weather from "./components/Weather"
import FiveDayForecast from "./components/FiveDayForecast"
import SearchCityInput from "./components/SearchCity"
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		
		return(
		
		<BrowserRouter> 
    <Switch>
             
                <Route path="/searchCity" component={AxiosTest} />
                <Route path="/weather" component={Weather} />
                <Route path="/currentWeather" component={CurrentWeather} />
                <Route path="/fiveDayForecast" component={FiveDayForecast} />
                <Route path="/search" component= {SearchCityInput} /> 
            </Switch>

            </BrowserRouter>
			)
		}
		
		
	
	
	
}

export default App;
