import React from 'react'
import { BrowserRouter, Route, Switch,Link,withRouter,useHistory } from 'react-router-dom';
import "./HomePage.css"
import Logo from "./Images/logoupdate.png"

class AxiosTest extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            inputValue: '',
            city:'',
            temp:'',
            humidity:'',
            windSpeed:''
        }

        this.c= {};
        
        this.dateMap = {
            0:"Sunday",
            1:"Monday",
            2:"Tuesday",
            3:"Wednesday",
            4:"Thursday",
            5:"Friday",
            6:"Saturday"
        }
    }


    componentDidMount() {
     
    
    }

    handleInputChange = (event) =>  {
        this.setState((state) => {
            return {inputValue: event.target.value}
        })
    }

    displayWeather = (city) =>
    {
        if (city.length >1) {
            return <p>The weather at city, {city} is , {this.state.temp}</p> 
        }
    }

    submitQuery = (event) => {
        event.preventDefault();
        console.log(this.state.inputValue)
        this.props.history.push({
            pathname:"/weather/",
            state:{
                city:this.state.inputValue
            }
        })
        //const axios = require("axios")

        /*axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.state.inputValue+"&units=metric&appid=22bb908a62aaedc4f1b825ccdd1a0b3b")
        .then((response) => {
            this.setState((state)=> {
                return {city: this.state.inputValue, temp:response.data.main.temp, windSpeed:response.data.wind.speed,humidity:response.data.main.temp}
            })
        })
        .catch((error) => {

        }).then(()=> {
            this.props.history.push({
            pathname:"/currentWeather/",
            
            state: {
                city: this.state.inputValue,
                temp: this.state.temp,
                wind: this.state.windSpeed,
                humidity: this.state.humidity
              }            
            });
        }
        
        );*/

        /*axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?id=Toronto&cnt=7&mode=json&units=metric&appid=22bb908a62aaedc4f1b825ccdd1a0b3b")
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error);
        })
        .then(()=>{

        })

        */

    }

    render(){
        return (
            <div id="searchContainer" > 
            <img src= {Logo}  id="logoPic"/>
                <form id="searchForm" onSubmit={this.submitQuery}>
                    <input id="cityInput" type="text" placeholder="Enter City Name" onChange={this.handleInputChange} />
                    <button id="submitButton" type="submit">Search </button>
                    {this.displayWeather(this.state.city)}
                </form>
                

            </div>
        
        )}

}

export default AxiosTest