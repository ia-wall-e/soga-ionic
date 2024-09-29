import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  placeholder?: string;
  isActive: boolean = false;
  constructor() { }
  ngOnInit() { }
  searchActive(evento:any) {
    if(evento.type==='focus'){this.isActive = true}
    if(evento.type==='blur'){this.isActive = false}
  }
}
