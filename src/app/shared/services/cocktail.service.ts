import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from 'src/app/shared/interface/cocktail-interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails$: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    {
      name: 'Mojito',
      img: 'https://boiremixologie.com/files/medias/_thumb/mojito.jpg',
      description:
        'La légende met en vedette un pirate anglais qui aurait inventé cette recette lorsqu’il était à la conquête des mers de l’Amérique latine, dont Cuba.',
      ingredients: [
        { name: 'Perrier', quantity: 2 },
        { name: 'Rhum', quantity: 3 },
        { name: 'Menthe', quantity: 1 },
      ],
    },
    {
      name: 'Martini',
      img: 'https://boiremixologie.com/files/medias/_thumb/capture-ecran-martini.jpg',
      description:
        '« Martini, shaken, not stirred », comme disait James Bond. Ce cocktail aurait été inventé après l’importation du vermouth italien Martini aux États-Unis',
      ingredients: [
        { name: 'Cranberry', quantity: 2 },
        { name: 'Citron', quantity: 1 },
        { name: 'Vodka', quantity: 2 },
      ],
    },
    {
      name: 'Margarita',
      img: 'https://boiremixologie.com/files/medias/_thumb/margarita.jpg',
      description:
        'Fait intéressant : la margarita est le cocktail le plus commandé en Amérique du Nord.',
      ingredients: [
        { name: 'Cranberry', quantity: 1 },
        { name: 'Citron', quantity: 1 },
        { name: 'Vodka', quantity: 1 },
      ],
    },
    {
      name: 'Old Fashioned',
      img: 'https://boiremixologie.com/files/medias/_thumb/Old-fashioned.jpg',
      description:
        'Ce dernier apporta ensuite la recette au Waldorf-Astoria Hotel de New York. Le reste appartient à l’histoire',
      ingredients: [
        { name: 'Cranberry', quantity: 3 },
        { name: 'Citron', quantity: 2 },
        { name: 'Vodka', quantity: 1 },
      ],
    },
    {
      name: 'Rhum & coke',
      img: 'https://boiremixologie.com/files/medias/_thumb/sirop_tonic_cola.jpg',
      description:
        'Le rhum &Coke, ou Cuba Libre pour le reste de la planète (au Québec, on aime être différent), a été popularisé à l’époque de la prohibition par les mafiosos qui profitaient de Cuba pour vendre leur alcool',
      ingredients: [
        { name: 'Rhum', quantity: 2 },
        { name: 'Triple sec', quantity: 2 },
        { name: 'Citron', quantity: 3 },
      ],
    },
  ]);

  // public selectedCocktail$: BehaviorSubject<Cocktail> = new BehaviorSubject(
  //   this.cocktails$.value[0] // permet de récupere la derniere l'element dans le tableau
  // );

  // //methode permettant d'écouter le eventEmitter
  // public selectCocktail(index: number): void {
  //   this.selectedCocktail$.next(this.cocktails$.value[index]);
  // }

  public getCocktail(index: number) {
    return this.cocktails$.value[index];
  }

  constructor() {}
}
