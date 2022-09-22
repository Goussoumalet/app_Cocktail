import { Component, OnInit } from '@angular/core';
import { Cocktails } from '../interface/cocktails-interface';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktails[] = [
    {
      name: 'Mojito',
      img: 'https://boiremixologie.com/files/medias/_thumb/mojito.jpg',
      description:
        'La légende met en vedette un pirate anglais qui aurait inventé cette recette lorsqu’il était à la conquête des mers de l’Amérique latine, dont Cuba.',
    },
    {
      name: 'Martini',
      img: 'https://boiremixologie.com/files/medias/_thumb/capture-ecran-martini.jpg',
      description:
        '« Martini, shaken, not stirred », comme disait James Bond. Ce cocktail aurait été inventé après l’importation du vermouth italien Martini aux États-Unis',
    },
    {
      name: 'Margarita',
      img: 'https://boiremixologie.com/files/medias/_thumb/margarita.jpg',
      description:
        'Fait intéressant : la margarita est le cocktail le plus commandé en Amérique du Nord.',
    },
    {
      name: 'Old Fashioned',
      img: 'https://boiremixologie.com/files/medias/_thumb/Old-fashioned.jpg',
      description:
        'Ce dernier apporta ensuite la recette au Waldorf-Astoria Hotel de New York. Le reste appartient à l’histoire',
    },
    {
      name: 'Rhum & coke',
      img: 'https://boiremixologie.com/files/medias/_thumb/sirop_tonic_cola.jpg',
      description:
        'Le rhum &Coke, ou Cuba Libre pour le reste de la planète (au Québec, on aime être différent), a été popularisé à l’époque de la prohibition par les mafiosos qui profitaient de Cuba pour vendre leur alcool',
    },
  ];
  constructor() {}

  public selectedCocktail!: Cocktails;

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }

  //methode permettant d'écouter le eventEmitter
  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
