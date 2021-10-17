  import { Component, OnInit } from '@angular/core';
import { PeopleSWService } from '../people-sw.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  persona: any;

  constructor(private peopleService: PeopleSWService) { }

  ngOnInit(): void {
  }



}