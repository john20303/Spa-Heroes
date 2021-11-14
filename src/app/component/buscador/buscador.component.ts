import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";
import {Heroes} from "../interfaces/heroes";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroes[]=[];
  heroe: any;

  constructor(private activatedroute: ActivatedRoute, private _heroes: HeroesService) {
  }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      console.log(params['id']);//Aqui estamos asignando el nombre del dato que viene en la peticion params
      this.heroe = params['id'];
      this.heroes = this._heroes.buscarHeroe(params['id']);
      console.log(this.heroes);
    });
  }

}
