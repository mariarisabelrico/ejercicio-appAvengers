import { Component, OnInit } from '@angular/core';
import { Avenger } from './avengers.models';
import { avengers } from '../heroes.config';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss'],
})
export class AppListComponent implements OnInit {
  constructor() {}

  public heroes: Avenger[] = avengers as Avenger[];
  public isSelected: boolean = false;
  getAvengers() {
    console.log(this.heroes);
  }

  public onClick() {
    this.isSelected = !this.isSelected;
  }

  ngOnInit(): void {}
}
