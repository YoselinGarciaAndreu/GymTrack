import { Component, OnInit } from '@angular/core';
import {search_bar,search_bars} from './search_bar-data';

@Component({
  selector: 'app-search_bar',
  templateUrl: './search_bar.component.html'
})
export class Search_barComponent implements OnInit {

  search_bars:search_bar[];

  constructor() { 

    this.search_bars=search_bars;
  }
  

  ngOnInit(): void {
  }

}
