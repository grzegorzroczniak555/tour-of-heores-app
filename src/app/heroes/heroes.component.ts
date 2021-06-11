// import { HEROES } from './../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  // heroes = HEROES;
  heroes: Hero[];
  // selectedHero: Hero;


  constructor(private heroService: HeroService) { }



  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
      });
  }

  // onSelect(hero: Hero): void {
  // this.selectedHero = hero;
  // }





}
