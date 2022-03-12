import axios from 'axios';
import React from 'react'
import Sun from "./Images/sun.png"
import Clouds from "./Images/cloud.png"
import Rain from "./Images/rain.png"
import Thunder from "./Images/thunder.png"
import Snow from "./Images/snow.png"
import "./News.css"
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get("https://content.guardianapis.com/search?section=business&from-date=2021-11-01&show-fields=thumbnail&api-key=test").
        then((response)=>{
          console.log(response)

        
    }
        ).catch((error)=>{
            console.log("Something went wrong")
            console.log(error)
        }).then(()=>{
        

        })
    }

    render() {
        return (
            <p> test</p>
        )
    }
}

export default News;