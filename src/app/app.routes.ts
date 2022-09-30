import { Routes } from '@angular/router';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { PanierContainerComponent } from './panier-container/panier-container.component';
import { CocktailsDetailsComponent } from './cocktail-container/cocktails-details/cocktails-details.component';
import { CocktailFormComponent } from './cocktail-container/cocktail-form/cocktail-form.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  {
    path: 'cocktails',
    component: CocktailContainerComponent,
    children: [
      { path: 'new', component: CocktailFormComponent },
      { path: ':index/edit', component: CocktailFormComponent },
      { path: ':index', component: CocktailsDetailsComponent },
      { path: '', redirectTo: '0', pathMatch: 'full' },
    ],
  },
  { path: 'panier', component: PanierContainerComponent },
];
