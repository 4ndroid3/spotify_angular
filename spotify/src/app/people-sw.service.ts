import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleSWService {

  constructor(
    private http: HttpClient,) { }

  personas: People[] = []; 
  
  getPeopleJson(url: string) {
    return this.http.get(url);
  }
}
      // response => {

        // this.personas = response;
        // let persona = new People(
        //   response['name'],
        //   response['height'],
        //   response['hair_color'],
        //   response['skin_color'],
        //   response['eye_color'],
        //   response['birth_year'],
        //   response['gender'],
        // );
      // }
    // );
  // }

