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
  persona: People[] = []; 

  constructor(private httpClient: HttpClient,) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.httpClient.get<any>('https://swapi.dev/api/people/1/').subscribe(
      response => {
        console.log(response);
        this.persona = response;
      }
    );
  }
}