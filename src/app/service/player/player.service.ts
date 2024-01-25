import { HttpRequest } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private playerUrl = `${environment.apiUrl}/players`;

  constructor(private http: HttpClient) { }

  getAllPlayers(): Observable<HttpRequest<any[]>> {
    return this.http.get<HttpRequest<any[]>>(this.playerUrl, {observe: 'body'});
  }

}
