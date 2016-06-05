import {Component} from '@angular/core';
import {Weather} from './weather';

@Component({
    selector : 'my-app',
    template : `
    	<h1>Weather App</h1>
        <input [(ngModel)]="city" placeholder="Search weather of your city" (keyup)="addCity(city, $event)"/>
    	<h2> This is the weather forecast in {{city}}</h2>
    	<ul *ngFor="let weather of weatherOfCities">
        	<li> <h2>{{weather.city}}</h2>
                <ul>
                    <li>Weather Type: {{weather.type}}</li>
                    <li>Description: {{weather.description}}</li>
                </ul>
            </li>
    	</ul>
    `
})
export class AppComponent {
	public city: string;
    public cities: Array<string>;
    public weatherOfCities: Array<Weather>;
	
    constructor() {
		this.city = "";
        this.weatherOfCities = [];
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
            weather = {
                "id": 2,
                "city": "london",
                "main": "Rain",
                "description": "very heavy rain"
            };
        } // END OF ELSE IF
        return weather;
    }
    addCity = function(city: string, $event:any) {
        if ($event.keyCode == 13) {
            var weather = this.getWeather(city);
            if (weather) {
                this.weatherOfCities.push(this.getWeather(city));
            }
            this.city = "";
        }
    }
}