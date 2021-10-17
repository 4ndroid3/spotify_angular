import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleSWService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  persona: People[] = []; 
}

