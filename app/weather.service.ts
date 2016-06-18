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

    getWeather(city: string) {
        return new Observable((observable:any) => {
            this._http.get(this.getWeatherUrl(city))
                .map(res => res.json())
                .subscribe(res => {
                    var weather: Weather = res.weather[0];
                    weather.city = city;
                    observable.next(weather);
                });
        });
    }
}