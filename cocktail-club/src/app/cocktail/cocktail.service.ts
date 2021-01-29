import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ICocktail } from "./cocktail.interface";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CocktailService {

  constructor(private http: HttpClient) {}
  get(name: string): Observable<ICocktail> {
    const cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini/`;
    const params = new HttpParams().append('s', name).append('1', '');
    return this.http.get(cocktailUrl, {params});
  }
}
