import React from 'react'
import { BrowserRouter, Route, Switch,Link,withRouter,useHistory } from 'react-router-dom';


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
     /*   const axios = require('axios');

        console.log(this.c)
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Toronto&units=metric&appid=22bb908a62aaedc4f1b825ccdd1a0b3b")
        .then( (response) => {
            console.log(response);
           console.log(this.c)
            response.data.list.map((date,index)=>{
            
            return(
                parseInt(date.dt_txt.substring(11,13))>12?
            
                        (!this.c.hasOwnProperty(this.dateMap[new Date(date.dt*1000).getDay()])?
                            (this.c[this.dateMap[new Date(date.dt*1000).getDay()]] = {"day":this.dateMap[new Date(date.dt*1000).getDay()],"weather":date.weather[0].main,"temp":date.main.temp}):
                        ""
                        )
                        :
                    
                    console.log("")                    
            )
           }) 

          


          })
          .catch(function (error) {
            console.log("Something went wrong")
            console.log(error);
          })
          .then( () => {
              console.log(this.c.length)

              for(var key in this.c) {
                  console.log(this.c[key])
              }
         
          }); */
    
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
            <div>                
                <p> Weather API Test</p>
                <form onSubmit={this.submitQuery}>
                    <input type="text" placeholder="Enter City Name" onChange={this.handleInputChange} />
                    <button type="submit">Submit </button>
                    {this.displayWeather(this.state.city)}
                </form>
                

            </div>
        
        )}

}

export default AxiosTest