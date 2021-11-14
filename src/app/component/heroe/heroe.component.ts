import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroesService} from "../../services/heroes.service";
import {Heroes} from "../interfaces/heroes";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: any = {};

  constructor(private activateroute: ActivatedRoute, private _heroes: HeroesService) {
    this.activateroute.params.subscribe(params => {
      this.heroe = this._heroes.getheroe(params['id']);
      console.log(this.heroe);
    })
  }

  ngOnInit(): void {
  }

}
