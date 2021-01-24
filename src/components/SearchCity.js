import React from 'react'
import "./SearchCity.css"

class SearchCityInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName:''
        }

        this.handleChange = this.handleChange.bind(this)
        this.searchCity =  this.searchCity.bind(this)
    }

    handleChange = (event) => {
        this.setState((state)=> {
            return {
                cityName: event.target.value
            }
        })
    }

    searchCity = (event) => {
        event.preventDefault();
       // console.log("this is the input"+this.state.cityName)
        this.props.callBackTest(this.state.cityName)
    }


    render() {
        return (
            <form onSubmit = {this.searchCity}>
                <div id="form-container">
                <input type="text" id="searchCity" onChange={this.handleChange} />
                <input id="searchSubmit" type="submit" />
                </div>
            </form>
        )
    }
}

export default SearchCityInput;