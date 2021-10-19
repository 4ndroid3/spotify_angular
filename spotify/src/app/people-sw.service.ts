import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleSWService {

  persona = new People(
    "", "", "", "", "", "", "");
  constructor(
    private http: HttpClient,) { }

  
  getPeopleJson(url: string) {
    return this.http.get(url);
  }
}
