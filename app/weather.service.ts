import {Injectable} from '@angular/core';
import {Weather} from './weather';

@Injectable()

export class WeatherService{
	//getWeather(city: string) {
	getWeather = function(city: string) {
        var weather: Weather;
        if (city.toLocaleLowerCase() == "vienna") { //IF ENTERED CITY IS VIENNA RETURN BELOW WEATHER OBJECT
            weather = {
                "id": 1,
                "city": "vienna",
                "main": "Clouds",
                "description": "overcast clouds"
            };
        } else if (city.toLocaleLowerCase() == "london") {
            // RETURN BELOW OBJECT IF SEARCHED CITY IS LONDON
            weather = {
                "id": 2,
                "city": "london",
                "main": "Rain",
                "description": "very heavy rain"
            };
        } else {
            // IF SEARCHED CITY DOESN'T EXIST
            
        }
        return weather;
    }
}