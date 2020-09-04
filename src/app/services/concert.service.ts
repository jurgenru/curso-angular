import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) { }

  public getConcert(): Observable<any> {
    return this.http.get('https://super-ticket-test.firebaseio.com/concerts.json');
  }
  public addgeConcert(concert: any): Observable<any> {
    return this.http.post('https://super-ticket-test.firebaseio.com/concerts.json', concert);
  }
  public deletegetConcert(id: any): Observable<any>{
    return this.http.delete(`https://super-ticket-test.firebaseio.com/concerts/${id}.json`);
  }
  public updategetConcert(id: any, concert: any): Observable<any>{
    return this.http.put(`https://super-ticket-test.firebaseio.com/concerts/${id}.json`, concert);
  }
}
