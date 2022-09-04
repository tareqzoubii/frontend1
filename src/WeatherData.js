import axios from "axios";
import React from "react";

class WeatherData extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            weatherArr : []
        }
    }
    weatherDatas = async (event) => {
        event.preventDefault();
        const weatherQuery = event.target.weatherDataform.value;
        const weatherURL = `${process.env.REACT_APP_LOCAL_HOST}getWeather?weatherQuery=${weatherQuery}`;
        //console.log(weatherURL);
        try
        {
            let weatherResponce = await axios.get(weatherURL);
            console.log(weatherResponce.data);
            this.setState({
                weatherArr : weatherResponce.data
            })
        }
        catch
        {
            //ERORR!!
        }

    }
    render(){
        return(
            <div>
                <form onSubmit={this.weatherDatas}>
                    <input type="text" name="weatherDataform" placeholder="Search for weather" />
                    <button type="Submit">Search</button>
                </form>
                {this.state.weatherArr.map((val, x) => {
                    return(
                      <div>
                        <h2>Day: {x + 1}</h2>
                        <h3>Description: {val.description}</h3>
                        <h3>Date: {val.datetime}</h3>
                      </div>
                    );
                })}    
                    

            </div>
        )
    }

}
export default WeatherData;