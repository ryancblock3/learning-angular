import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  countryName: any;
  countryCapital: any;
  countryRegion: any;
  countryIncomeLevel: any;
  countryLatitude: any;
  countryLongitude: any;  
  title = 'testing-map';
  public getJsonValue: any;
  public postJsonValue: any;
  countryID = 'USA';

  ngOnInit(): void {
    this.getMethod();
    this.postMethod();
  }

  constructor(private http: HttpClient) {

  }

  public getMethod() {
    this.http.get('http://api.worldbank.org/v2/country/MEX?format=json').subscribe((data) => {
      console.log(data);
      this.getJsonValue = data;
      this.countryName = this.getJsonValue[1][0].id;
      this.countryCapital = this.getJsonValue[1][0].capitalCity;
      this.countryRegion = this.getJsonValue[1][0].region.value;
      this.countryIncomeLevel = this.getJsonValue[1][0].incomeLevel.value;
      this.countryLatitude = this.getJsonValue[1][0].latitude;
      this.countryLongitude = this.getJsonValue[1][0].longitude;
    });
  }

  public postMethod() {
    let body = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts',body).subscribe((data) => {
      console.log(data);
      this.postJsonValue = data;
    });
  }
}
