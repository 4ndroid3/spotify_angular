import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeopleSWService } from '../people-sw.service';
import { People } from '../people.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public personaService: PeopleSWService) {   
    personaService.getPeopleJson('https://swapi.dev/api/people/1/')
      .subscribe(
        (res: any) => {
          console.log(res)
        }
      );
  }

    
  
  ngOnInit(): void {
  } 
  
}