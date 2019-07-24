import { Injectable } from '@angular/core';
import { EventResponse, Acknowledgement } from './interfaces';
import { HttpClient } from '@angular/common/http' ;
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private endpoint = 'https://us-central1-ps-notify-api.cloudfunctions.net/api';

  constructor( private http: HttpClient) { }
}
