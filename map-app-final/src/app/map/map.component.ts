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
          if (countryId) {
            this.onClick(countryId);
          }
        });
      });
    }

    onClick(countryId: string) {
      if (countryId) {
        this.apiService.getInfo(countryId).subscribe((data: any) => {
          const countryName = data[1][0].name;
          const countryCapital = data[1][0].capitalCity;
          const countryRegion = data[1][0].region.value;
          const countryIncomeLevel = data[1][0].incomeLevel.value;
          const countryLatitude = data[1][0].latitude;
          const countryLongitude = data[1][0].longitude;
          console.log(countryName);
          console.log(countryCapital);
          console.log(countryRegion);
          console.log(countryIncomeLevel);
          console.log(countryLatitude);
          console.log(countryLongitude);
          this.countryIdSelect.emit(countryName);
          this.countryIncomeSelect.emit(countryIncomeLevel);
          this.countryCapitalSelect.emit(countryCapital);
          this.countryRegionSelect.emit(countryRegion);
          this.countryLatitudeSelect.emit(countryLatitude);
          this.countryLongitudeSelect.emit(countryLongitude);

        });
      }
    }

    @Output() countryIdSelect = new EventEmitter<string>();
    @Output() countryIncomeSelect = new EventEmitter<string>();
    @Output() countryCapitalSelect = new EventEmitter<string>();
    @Output() countryRegionSelect = new EventEmitter<string>();
    @Output() countryLatitudeSelect = new EventEmitter<string>();
    @Output() countryLongitudeSelect = new EventEmitter<string>();
    @ViewChild(InfoComponent)
    private infoComponent!: InfoComponent;

  }