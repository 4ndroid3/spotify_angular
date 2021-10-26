import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiPipePipe } from '../mi-pipe.pipe';
import { PeopleSWService } from '../services/people-sw.service';
import { People } from '../people.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  personas: any;
  personasArray: People[] = []

  name: string = '';
  height: string = '';
  hair_color: string = '';
  skin_color: string = '';
  eye_color: string = '';
  birth_year: string = '';
  gender: string = '';
  
  id_persona: string = '1';

  persona = new People(
    this.name, 
    this.height, 
    this.hair_color, 
    this.skin_color, 
    this.eye_color, 
    this.birth_year, 
    this.gender
  );

  constructor(
    public personaService: PeopleSWService,
    private router: Router) {   
  }
  
  
  ngOnInit(): void {
    this.mostrarPersonas()
  }
  
  cargarPersona() {
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

  mostrarPersonas() {
    this.personaService.getPeopleJson('https://swapi.dev/api/people/')
      .subscribe(
        (res: any) => {
          this.personas = res['results']
          // console.log(this.personas[10])
          let count = Object.keys(this.personas).length
          console.log(count)
          for (let index = 0; index < count; index++) {
            this.personasArray.push(
              new People(
                this.personas[index]['name'],
                this.personas[index]['height'],
                this.personas[index]['hair_color'],
                this.personas[index]['skin_color'],
                this.personas[index]['eye_color'],
                this.personas[index]['birth_year'],
                this.personas[index]['gender'],  
              )
            );
          }
        }
      );
  }

  volverHome() {
    this.router.navigate([""])
  }

}
