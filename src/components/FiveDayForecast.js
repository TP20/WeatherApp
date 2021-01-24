import axios from 'axios';
import React from 'react'
import Sun from "./Images/sun.png"
import Clouds from "./Images/cloud.png"
import Rain from "./Images/rain.png"
import Thunder from "./Images/thunder.png"
import Snow from "./Images/snow.png"
import "./FiveDayForecast.css"

class FiveDayForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.c= {};
        this.flag=true;
        
        this.dateMap = {
            0:"Sunday",
            1:"Monday",
            2:"Tuesday",
            3:"Wednesday",
            4:"Thursday",
            5:"Friday",
            6:"Saturday"
        }

        this.imageMap = {
            "Clouds":Clouds,
            "Rain":Rain,
            "Snow":Snow,
            "Thunderstorm":Thunder,
            "Drizzle": Rain,
            "Clear":Sun
        }

        this.forecast = this.forecast.bind(this)
        this.weatherImage = this.weatherImage.bind(this)
    }

    componentDidMount() {
     
    
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.cityName !== this.props.cityName) {
            const axios = require("axios");
        if(this.flag){
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+this.props.cityName+"&units=metric&appid=70524abc9c79a3fcaccc882ea4e7e594").
        then((response)=>{
            this.flag=false;
            console.log(response);
            response.data.list.map((date,index)=>{
                console.log("this is the date:"+this.dateMap[new Date(date.dt*1000).getDay()]);
            let dayTest = this.dateMap[new Date(date.dt*1000).getDay()];

            return(
                
                parseInt(date.dt_txt.substring(11,13))>12?
                    //console.log("Inside Loop")
                          (!this.state.hasOwnProperty(this.dateMap[new Date(date.dt*1000).getDay()]) && Object.keys(this.state).length<5?
                            this.setState((state)=>{
                                return {
                                    [this.dateMap[new Date(date.dt*1000).getDay()]]:{weather:date.weather[0].main,temp:date.main.temp}
                                }
                            })
                            : (Object.keys(this.state).length==5) ?
                                //console.log("In condition")
                                this.setState((state)=>{
                                    return {
                                      //  [this.dateMap[new Date(date.dt*1000).getDay()]]:{weather:date.weather[0].main,temp:date.main.temp}
                                        [this.dateMap[new Date(date.dt*1000).getDay()]]:{weather:date.weather[0].main,temp:date.main.temp}
                                   
                                    }
                                })                          
                            :
                            console.log(Object.keys(this.state).length)
                        )
                        ://outer
                    
                    console.log("")                    
            )

        })
    }).
        catch((error)=>{
            console.log("Something went wrong")
        }).then(()=>{
            var c="";
            this.flag=true;
            return Object.keys(this.state).map((key)=>{
                return <div style={{width:"10rem", background:"white", margin:"2rem 0", height:"12rem", textAlign:"center"}}><p>{key}</p>
                             {this.weatherImage(this.state[key].weather)} 
                             <p style={{margin: "0 0 0.5rem 0"}}>{this.state[key].temp}</p>
                             <p style={{margin:"0"}}>{this.state[key].weather}</p>

                </div>
             })

        })


        }
        }
    }

    weatherImage = (k) => {
        //const c = Sun;
       // console.log("this is the key"+k)
        return <img id="weatherImage" src={this.imageMap[k]} />
        
        
    }

    forecast = () => {

        const axios = require("axios");
        if(this.flag){
        //this.flag=false;
        axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+this.props.cityName+"&units=metric&appid=70524abc9c79a3fcaccc882ea4e7e594").
        then((response)=>{
            this.flag=false;
            console.log(response);
            response.data.list.map((date,index)=>{
                console.log("this is the date:"+this.dateMap[new Date(date.dt*1000).getDay()]);
            let dayTest = this.dateMap[new Date(date.dt*1000).getDay()];

            return(

                parseInt(date.dt_txt.substring(11,13))>12?
                    //console.log("Inside Loop")
                          (!this.state.hasOwnProperty(this.dateMap[new Date(date.dt*1000).getDay()]) && Object.keys(this.state).length<5?
                          this.setState((state)=>{
                              return {
                                [this.dateMap[new Date(date.dt*1000).getDay()]]:{weather:date.weather[0].main,temp:date.main.temp}
                              }
                          }):

                          ""
                        )
                        :
                    
                    console.log("")                    
            )

        })
    }).
        catch((error)=>{
            console.log("Something went wrong")
        }).then(()=>{
            var c="";

        })


        }
  
    }

    testRender = () => {
        return <div><p>test</p></div>
    }
    render() {
        return (
            <div className="fiveDayForecast_container">
          {Object.keys(this.state).map((key)=>{
                return <div className="day_card"><p>{key}</p>
                             {this.weatherImage(this.state[key].weather)} 
                             <p className="temp_type">{this.state[key].temp}</p>
                             <p className="temp_degrees">{this.state[key].weather}</p>

                </div>
             })}
            </div>


        )
    }


}

export default FiveDayForecast;