import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleComponent } from './people/people.component';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'people', component: PeopleComponent},
  {path: 'ships', component: ShipsComponent},
  {path: 'planets', component: PlanetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
