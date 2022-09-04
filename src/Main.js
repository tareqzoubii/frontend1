import React from "react";
import Searching from "./Searching";
import WeatherData from "./WeatherData";

class Main extends React.Component {
    render(){
        return(
            <div>
                <h2 style={{textAlign: "center"}}>Search Here For the City</h2>
                <Searching />
                <WeatherData />
            </div>
        )
    }
}
export default Main;