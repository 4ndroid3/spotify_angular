import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleSWService } from '../people-sw.service';
import { People } from '../people.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personas: any;
  personasArray: People[] = []

  constructor(
    private router: Router,
    public personaService: PeopleSWService,
    ) { }

  ngOnInit(): void {
    this.mostrarPersonas()
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