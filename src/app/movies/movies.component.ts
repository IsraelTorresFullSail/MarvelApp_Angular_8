import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './../characters/character/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters: Observable<any>;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters();
  }

}
