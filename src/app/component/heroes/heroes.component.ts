import {Component, OnInit} from '@angular/core';
import {HeroesService} from "../../services/heroes.service";
import {Heroes} from "../interfaces/heroes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private _heroes: HeroesService, private router: Router) {
  }

  ngOnInit(): void {
    this.heroes = this._heroes.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(i: number) {
    this.router.navigate(['/heroe',i]);
  }
}
