import {Component} from '@angular/core';
import {Weather} from './weather';
import {WeatherService} from './weather.service';

@Component({
    selector : 'my-app',
    template : `
        <header>
            <h1>Weather App</h1>    
        </header>
        <div class="content">
            <input [(ngModel)]="city" placeholder="Search weather of your city" (keyup)="addCity(city, $event)"/>
            <p *ngIf="errorMessage" class="error-message">{{errorMessage}}</p>
        	<h2> This is the weather forecast in {{city}}</h2>
        	<ul *ngFor="let weather of weatherOfCities">
            	<li> <h2>{{weather.city}}</h2>
                    <ul>
                        <li>Weather Type: {{weather.main}}</li>
                        <li>Description: {{weather.description}}</li>
                    </ul>
                </li>
        	</ul>
        </div>
    `,
    styles: [`
        header h1 {
            padding: 10px;
            background: #5F9EA0;
            color: #F5F5F5;
            text-shadow: 1px 1px 4px #808080;
        }
        
        .content {
            padding: 10px;
        }
        
        input {
            font-size : 16px;
            padding: 4px;
        }
        
        .weather - card {
                border-bottom: 1px solid #D3D3D3;
                padding-bottom: 10px;
        }
        
        .error-message {
            color: red;
            font-style: 12px;
        }
    `],
    providers: [WeatherService]
})
export class AppComponent {
	public city: string;
    public cities: Array<string>;
    public weatherOfCities: Array<Weather>;
    public errorMessage: string;

    constructor(private weatherService:WeatherService) {
		this.city = "";
        this.weatherOfCities = [];
	}   

    addCity(city: string, $event: any) {    
        if ($event.keyCode == 13) {
            var weather = this.weatherService.getWeather(city);
            if (weather) {
                this.weatherOfCities.push(weather);
                this.errorMessage = undefined;
            } else {
                var cityWithoutWeather = city;
                this.errorMessage = "Sorry! There is not weather data for " + cityWithoutWeather + ".";
            }
            this.city = "";
        }
    }
}