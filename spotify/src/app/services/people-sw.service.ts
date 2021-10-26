import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleSWService {

  constructor(
    private http: HttpClient,) { }

  
  getPeopleJson(url: string) {
    return this.http.get(url);
  }
}
