import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cocktails } from '../../interface/cocktails-interface';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss'],
})
export class CocktailsListComponent implements OnInit {
  /**
   * ajout de la propriété input qui permet la communication entre
   * un composant parent vers un composant enfant.
   */
  @Input()
  public cocktails?: Cocktails[];

  /**
   * ajout de EventEmitter sur la propiété output qui permet la communication
   * entre le composant enfant vers le composant parent
   */
  @Output()
  private changeCocktail: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // cette méthode permet d'emettre notre event.
  public selectCocktail(index: number): void {
    this.changeCocktail.emit(index);
  }
}
