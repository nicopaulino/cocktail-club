import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ICocktail } from "./cocktail.interface";


@Injectable({
  providedIn: "root"
})
export class CocktailService {
  //fetch a pokemon by id from https://pokeapi.co/api/v2/pokemon/{id}

  constructor(private http: HttpClient) {}
  get(): Observable<ICocktail> {
    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini&1/`;
    return this.http.get(cocktailUrl);
  }
}
