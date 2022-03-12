import React from 'react'
import CurrentWeather from "./CurrentWeather"
import FiveDayForecast from"./FiveDayForecast"
import SearchCityInput from "./SearchCity"
//import SearchCityInput from ".."
import "./Weather.css"

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testCallback:"",
            city2:"",
            prevCity:"",
            
        }

        this.flag = "false"

        this.changeText = this.changeText.bind(this)
    }
    
    changeText = (testing) =>{
        this.setState((state)=>{
           return{city2:testing}
        })
    }

    componentDidMount() {
        
        if(this.props.location.state.city !== null){
            this.setState((state)=>{
                return{city2:this.props.location.state.city}
             })
        }
        
      /*  console.log(this.props.location.state.city)
        this.setState((state)=>{
            if(this.props.location.state.city !== null) {
                return {
                    city2:this.props.location.state.city,
                    prevCity:this.props.location.state.city
                }
            }
            else {
                console.log("THIS DOESN'T WORK")
            }
        })*/
        /*if(this.props.location.state.city) {
            this.setState((state)=>{
                return {
                    city2: this.props.location.state.city
                }
            })
        }*/
    }

    componentDidUpdate(prevState) {

    

        //this.setState((state)=>{
         //   return {
         //       prevCity: prevState.city2
          //  }
        //})

    }

    //                    <SearchCityInput callBackTest={this.changeText}/>


    render() {
        return (
            <div>
            
            <div style={{display:"flex", justifyContent:"center"}}>
           
                <div className="weather-container">
                <div>
                    <SearchCityInput callBackTest={this.changeText}/>
                    <h1 style={{color:"white"}}>{this.state.city2}</h1>
                    </div>
                   
                    <div>
                            <CurrentWeather cityName={this.state.city2} />
                            <h2 style={{color:"white", marginBottom:"0"}}>Five Day Forecast</h2>
                            <FiveDayForecast cityName={this.state.city2} /> 
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Weather;