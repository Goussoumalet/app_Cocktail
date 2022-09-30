import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from 'src/app/shared/interface/cocktail-interface';
import { PanierService } from '../../shared/services/panier.service';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss'],
})
export class CocktailsDetailsComponent implements OnInit {
  public cocktail: Cocktail;

  constructor(
    private panierService: PanierService,
    private activateRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {
    this.cocktail = this.cocktailService.getCocktail(
      +this.activateRoute.snapshot.paramMap.get('index')!
    );
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const cocktailIndex = paramMap.get('index');
      if (cocktailIndex) {
        this.cocktail = this.cocktailService.getCocktail(+cocktailIndex);
      }
    });
  }

  public addToPanier(): void {
    this.panierService.addPanier(this.cocktail.ingredients);
  }
}
