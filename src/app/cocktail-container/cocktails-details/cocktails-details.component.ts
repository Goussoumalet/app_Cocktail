import { Component, Input, OnInit } from '@angular/core';
import { Cocktails } from '../../interface/cocktails-interface';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss'],
})
export class CocktailsDetailsComponent implements OnInit {
  @Input()
  public cocktail!: Cocktails;
  constructor() {}

  ngOnInit(): void {}
}
