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

  constructor(private personaService: PeopleSWService) { }

  ngOnInit(): void {
    this.personaService.getPeople();
  }

  
}