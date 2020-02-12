import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe } from '../../service/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

   heroes: Heroe[] = [];
  // tslint:disable-next-line: variable-name
  constructor(private _heroesServices: HeroesService , private router: Router) {
  }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroes(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}
