import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetsComponent } from './planets/planets.component';
import { PeopleSWService } from './services/people-sw.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MiPipePipe } from './mi-pipe.pipe';
import { PeopleComponent } from './people/people.component';
import { ShipsComponent } from './ships/ships.component';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    PlanetsComponent,
    MiPipePipe,
    PeopleComponent,
    ShipsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PeopleSWService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
