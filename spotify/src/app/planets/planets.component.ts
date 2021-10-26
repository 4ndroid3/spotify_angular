import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleSWService } from '../services/people-sw.service';
import { People } from '../people.model';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(
    private router: Router,
    public personaService: PeopleSWService,
    ) { }

  ngOnInit(): void {
    
  }

  
      

  volverHome() {
    this.router.navigate([""])
  }

}