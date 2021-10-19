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
  pepe: any;
  persona = new People(
    "", "", "", "", "", "", "");
  constructor(public personaService: PeopleSWService) {   
  }
  
  
  ngOnInit(): void {
  }
  
  id_persona: string = '1';
  cargarPersona() {
    this.id_persona = this.id_persona
    this.personaService.getPeopleJson(`https://swapi.dev/api/people/${this.id_persona}/`)
    .subscribe(
      (res: any) => {
        console.log(res)
        this.persona.name = res['name'];
        this.persona.height = res['height'];
        this.persona.hair_color = res['hair_color'];
        this.persona.skin_color = res['skin_color'];
        this.persona.eye_color = res['eye_color'];
        this.persona.birth_year = res['birth_year'];
        this.persona.gender = res['gender'];
      }
    );
  }
  
}