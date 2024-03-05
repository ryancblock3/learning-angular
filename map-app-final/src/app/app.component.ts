import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'map-app-final';
  selectedCountryId!: string;
  selectedCountryName!: string;
  selectedCountryCapital!: string;
  selectedCountryRegion!: string;
  selectedCountryIncomeLevel!: string;
  selectedCountryLatitude!: string;
  selectedCountryLongitude!: string;

  onCountryIdSelect(countryId: string) {
    this.selectedCountryId = countryId;
  }

  onCountryNameSelect(countryName: string) {
    this.selectedCountryName = countryName;
  }

  onCountryCapitalSelect(countryCapital: string) {
    this.selectedCountryCapital = countryCapital;
  }

  onCountryRegionSelect(countryRegion: string) {
    this.selectedCountryRegion = countryRegion;
  }

  onCountryIncomeSelect(countryIncomeLevel: string) {
    this.selectedCountryIncomeLevel = countryIncomeLevel;
  }

  onCountryLatitudeSelect(countryLatitude: string) {
    this.selectedCountryLatitude = countryLatitude;
  }

  onCountryLongitudeSelect(countryLongitude: string) {
    this.selectedCountryLongitude = countryLongitude;
  }

}
