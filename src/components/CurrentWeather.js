import { render } from '@testing-library/react';
import React from 'react'
import Sun from "./Images/sun.png"
import Clouds from "./Images/cloud.png"
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
            windSpeed:"",
            weather:""
        }

        this.imageMapCurrent = {
            "Clouds":Clouds,
            "Rain":Rain,
            "Snow":Snow,
            "Thunderstorm":Thunder,
            "Drizzle": Rain,
            "Clear":Sun
        }

        this.weatherImageCurrent = this.weatherImageCurrent.bind(this)


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
       //     console.log("Current Weather "+response.data.weather[0].main);
            //response.data.weather.main
            this.setState((state)=>{
                return{
                    cityName:this.props.cityName,
                    temp:response.data.main.temp,
                    humidity:response.data.main.temp,
                    windSpeed:response.data.wind.speed,
                    weather:response.data.weather[0].main
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
   axios.get("https://api.openweathermap.org/data/2.5/weather?q="+this.props.cityName+"&units=metric&appid=70524abc9c79a3fcaccc882ea4e7e594").

   then((response)=>{
  if(this.flag) {
      this.flag=false;
        this.setState((state)=>{
            return{
                cityName:this.props.cityName,
                temp:response.data.main.temp,
                humidity:response.data.main.temp,
                windSpeed:response.data.wind.speed,
                weather:response.data.weather[0].main
                
            }
        })
  }
    }).
    catch((error)=>{
        console.log(error);
        //console.log("Something went wrong")

    }).
    then(()=>{

        this.flag=true;
    })

}

weatherImageCurrent = (k) => {
    //const c = Sun;
   // console.log("this is the key"+k)
    return <img className="currentWeatherImage" src={this.imageMapCurrent[k]} />
    
    
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
             {this.weatherImageCurrent(this.state.weather)} 
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