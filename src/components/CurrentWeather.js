import { render } from '@testing-library/react';
import React from 'react'
import Sun from "./Images/sunTransparent.png"
import Clouds from "./Images/clouds.png"
import Rain from "./Images/rain.png"
import Thunder from "./Images/thunder.png"
import Snow from "./Images/snow.png"
import "./CurrentWeather.css"

class CurrentWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName:"",
            temp:"",
            humidity:"",
            windSpeed:""
        }
        this.flag=true;
    }
/*
       <ul style={{listStyle:"none"}}>
             <li>Temperature: {this.state.temp}</li>
             <li>Humidity: {this.state.humidity}</li>
             <li>Wind Speed: {this.state.windSpeed}</li>
             </ul>
*/
componentDidUpdate(prevProps) {
    if (prevProps.cityName !== this.props.cityName) {
        const axios = require("axios");
    // axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+"&units=metric&appid=22bb908a62aaedc4f1b825ccdd1a0b3b").
    if(this.flag) {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+"&units=metric&appid=70524abc9c79a3fcaccc882ea4e7e594").

    then((response)=>{
        this.flag=false;
    
            this.setState((state)=>{
                return{
                    cityName:this.props.cityName,
                    temp:response.data.main.temp,
                    humidity:response.data.main.temp,
                    windSpeed:response.data.wind.speed
                }
            })
        
        }).
        catch((error)=>{
            console.log(error);
            //console.log("Something went wrong")

        }).
        then(()=>{
            this.flag=true;
        })
    }
}
}

componentDidMount() {
   const axios = require("axios");
   // axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+"&units=metric&appid=22bb908a62aaedc4f1b825ccdd1a0b3b").
   axios.get("http://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+"&units=metric&appid=70524abc9c79a3fcaccc882ea4e7e594").

   then((response)=>{
  
        this.setState((state)=>{
            return{
                cityName:this.props.cityName,
                temp:response.data.main.temp,
                humidity:response.data.main.temp,
                windSpeed:response.data.wind.speed
            }
        })
    
    }).
    catch((error)=>{
        console.log(error);
        //console.log("Something went wrong")

    }).
    then(()=>{

    })

}




render() {
    return (
        <div id="currentWeather_container">
        <div id="currentWeather_box">
         <div>
         <p id="currentWeather_header">Current Conditions</p>
         </div>
         <div id="currentWeather_data">
         <div id="currentWeather_image_container">
             <img className="currentWeatherImage" src={Snow} />
         </div>
         <div id="currentWeather_desc_container">
        
         <ul id="currentWeather_list_container">
             <li className="currentWeather_list_item">Temperature: {this.state.temp}</li>
             <li className="currentWeather_list_item">Humidity: {this.state.humidity}</li>
             <li className="currentWeather_list_item"> Wind Speed: {this.state.windSpeed}</li>
             </ul>

         </div>
         </div>
         
        </div>


        </div>
    )
}


}

export default CurrentWeather;