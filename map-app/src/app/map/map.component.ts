import { Component, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  public getJsonValue: any;
  public countryId: any;
  countryName: any;
  countryCapital: any;
  countryRegion: any;
  countryIncomeLevel: any;
  countryLatitude: any;
  countryLongitude: any;


  @Output() countryIdSelect = new EventEmitter<string>();
  @Output() countryIncomeSelect = new EventEmitter<string>();
  @Output() countryCapitalSelect = new EventEmitter<string>();
  @Output() countryRegionSelect = new EventEmitter<string>();
  @Output() countryLatitudeSelect = new EventEmitter<string>();
  @Output() countryLongitudeSelect = new EventEmitter<string>();
  @ViewChild(InfoComponent)
  private infoComponent!: InfoComponent;

  constructor(
    private apiService: ApiService,
    private elementRef: ElementRef
  ) {}

    ngOnInit() {
      const svgElement = this.elementRef.nativeElement.querySelector('svg');
      const pathElements = svgElement.querySelectorAll('path');
      pathElements.forEach((path: SVGPathElement) => {
        path.addEventListener('click', () => {
          const countryId = path.id;
          console.log(countryId);
          if (countryId) {
            this.onClick(countryId);
          }
        });
      });
    }

    onClick(countryId: string) {
      if (countryId) {
        this.apiService.getInfo(countryId).subscribe((response: any) => {
          this.getJsonValue = response;
          this.countryName = this.getJsonValue[1][0].name;
          this.countryCapital = this.getJsonValue[1][0].capitalCity;
          this.countryRegion = this.getJsonValue[1][0].region.value;
          this.countryIncomeLevel = this.getJsonValue[1][0].incomeLevel.value;
          this.countryLatitude = this.getJsonValue[1][0].latitude;
          this.countryLongitude = this.getJsonValue[1][0].longitude;
          console.log(this.countryName);
          console.log(this.countryCapital);
          console.log(this.countryRegion);
          console.log(this.countryIncomeLevel);
          console.log(this.countryLatitude);
          console.log(this.countryLongitude);
          this.countryIdSelect.emit(this.countryName);
          this.countryIncomeSelect.emit(this.countryIncomeLevel);
          this.countryCapitalSelect.emit(this.countryCapital);
          this.countryRegionSelect.emit(this.countryRegion);
          this.countryLatitudeSelect.emit(this.countryLatitude);
          this.countryLongitudeSelect.emit(this.countryLongitude);
        });
      }
    }

  }