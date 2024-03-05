import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'info/:countryId', component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
