import { Component, OnInit } from '@angular/core';
import { CocktailService } from "./cocktail.service";
import { ICocktail } from "./cocktail.interface";


@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit {

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
  }
  cocktailName: string;
  cocktail: ICocktail;


  submit() {
    this.cocktailService.get().subscribe(cocktail => {
      this.cocktail = cocktail;
      console.log(this.cocktail);
    });
  }
}
