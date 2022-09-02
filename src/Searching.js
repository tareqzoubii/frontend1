import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";


class Searching extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cityName: "",
            Longitude: "",
            Latitude: ""
        }
    }

    getCityData = async (event)=> {
        event.preventDefault();
        const dataQuery = event.target.cityName.value; // to link the function with form!
        // https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json <--this's the endPoint
        // my key --> pk.e2376fef13cd6ae7aeafe8a905f07067
        const URL = `https:us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${dataQuery}&format=json`;
        //console.log(process.env.REACT_APP_LOCATIONIQ_API_KEY);
        //console.log(event);
        //console.log(URL); <-- key give me undefined!!!
        // now i have to declear the responce!

        try
        {
            let locationResponce = await axios.get(URL);
        console.log(locationResponce.data)
        this.setState({
            cityName: locationResponce.data[0].display_name,
            Longitude: locationResponce.data[0].lon,
            Latitude: locationResponce.data[0].lat
        })
        }
        catch
        {
            //ERORR
        }
    }
// https://maps.locationiq.com/v3/staticmap?key=<YOUR_ACCESS_TOKEN>&center=<latitude>,<longitude> <-- to put map
    render(){
        return (
          <div>
            <Form onSubmit={this.getCityData}>
              <input type="text" name="cityName" placeholder="Search here" />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>

            <h3>City Name: {this.state.cityName}</h3>
            <h3>Longitude: {this.state.Longitude}</h3>
            <h3>Latitude: {this.state.Latitude}</h3>

            <img alt="map" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.Latitude},${this.state.Longitude}`} />
          </div>
        );
    }
}

export default Searching;