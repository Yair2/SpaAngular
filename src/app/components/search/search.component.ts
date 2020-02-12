import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../service/heroes.service';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
   heroes: Heroe[] = [];
   termino: string;
  constructor(private heroesService: HeroesService ,
              private activateRoute: ActivatedRoute,
              private router: Router)  {
   }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarHeroe(params.id);
      this.termino = params.id;
      console.log(this.heroes);
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe' , idx]);
  }

}
