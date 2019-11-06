import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TvService {

  constructor(public http: HttpClient) {
  }
  getShows(): Observable<Object> {
    return this.http.get('http://api.tvmaze.com/show/').pipe((res) => {
      return res;
    });
  }

  getDetalhes(id): Observable<Object> {
    return this.http.get('http://api.tvmaze.com/shows/' + id).pipe((res) => {
      return res;
    });
  }

  getSession(id): Observable<Object> {
    return this.http.get('http://api.tvmaze.com/shows/' + id + "/seasons").pipe((res) => {
      return res;
    });
  }

  getElenco(id): Observable<Object> {
    return this.http.get('http://api.tvmaze.com/shows/' + id + '/cast').pipe((res) => {
      return res;
    });
  }

  getEpisodes(id): Observable<Object> {
    return this.http.get('http://api.tvmaze.com/seasons/' + id + '/episodes').pipe((res) => {
      return res;
    });
  }

  getEpisode(id): Observable<Object> {
    return this.http.get('http://api.tvmaze.com/episodes/' + id).pipe((res) => {
      return res;
    });
  }

  filtrarItens(lista, filtro) {
    return lista.filter(item => {
      return item.name.toLowerCase().indexOf(filtro.toLowerCase()) > -1;
    }); 
  }
}
