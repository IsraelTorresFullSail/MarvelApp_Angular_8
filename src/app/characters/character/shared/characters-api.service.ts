import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY = 'b8394dc6ec1dfca478c897fb09afc93d';
  HASH = '64ab72e23c608c4733f3b9265299f7f9';
  URL_API = `https:gateway.marvel.com/v1/public/characters?orderBy=-modified&limit=80&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters (): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results));
  }
}
