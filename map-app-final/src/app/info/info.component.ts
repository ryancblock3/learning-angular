import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  @Input() countryId: string = '';
  @Input() countryName: string = '';
  @Input() countryCapital!: string;
  @Input() countryRegion!: string;
  @Input() countryIncomeLevel!: string;
  @Input() countryLatitude!: string;
  @Input() countryLongitude!: string;

  
  ngOnInit(): void {
   }

  constructor() { }

}
