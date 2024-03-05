import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  @Input() countryName: any;
  @Input() countryCapital: any;
  @Input() countryRegion: any;
  @Input() countryIncomeLevel: any;
  @Input() countryLatitude: any;
  @Input() countryLongitude: any;

  
  ngOnInit(): void {
   }

  constructor() { }

}
