import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/shared/interface/cocktail-interface';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss'],
})
export class CocktailsDetailsComponent implements OnInit {
  @Input()
  public cocktail!: Cocktail;
  constructor() {}

  ngOnInit(): void {}
}
