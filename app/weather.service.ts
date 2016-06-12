import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Weather} from './weather';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    private weatherApiURLstring = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=414885d939ea7344847c181fb7f59b07";

    constructor(private _http:Http){}

    getWeatherUrl(city:string) {
        return this.weatherApiURLstring + "&q=" + city;
    }

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
        }
        return weather;
    }
}