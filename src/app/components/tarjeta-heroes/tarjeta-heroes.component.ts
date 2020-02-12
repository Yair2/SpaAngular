import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';
import { HeroesService } from '../../service/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjeta-heroes',
  templateUrl: './tarjeta-heroes.component.html',
  styleUrls: ['./tarjeta-heroes.component.css']
})
export class TarjetaHeroesComponent implements OnInit {
  @Input() heroe: any  = {};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
  }

}
