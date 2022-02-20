import { Component, OnInit } from '@angular/core';
import { Cocktails } from '../interface/cocktails-interface';

@Component({
  selector: 'app-cocktails-details',
  templateUrl: './cocktails-details.component.html',
  styleUrls: ['./cocktails-details.component.scss'],
})
export class CocktailsDetailsComponent implements OnInit {
  cocktails: Cocktails = {
    name: 'mojito',
    img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
    description:
      'The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour',
  };

  constructor() {}

  ngOnInit(): void {}
}
