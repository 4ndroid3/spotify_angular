import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleSWService {

  constructor(
    private httpClient: HttpClient,
  ) {
    
  }

  

  personas: People[] = []; 


  getPeople() {
    this.httpClient.get<any>('https://swapi.dev/api/people/1/').subscribe(
      response => {
        // this.persona = response;
        let persona = new People(
          response['name'],
          response['height'],
          response['hair_color'],
          response['skin_color'],
          response['eye_color'],
          response['birth_year'],
          response['gender'],
        );
        console.log(persona);
        return persona
      }
    );
    
  }
}

