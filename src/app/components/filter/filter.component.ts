import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  filters:any[] = [];

  @Output()
  filterSelected:EventEmitter<number> = new EventEmitter<number>();

  changeFilter(index:number){
    for(let i=0; i < this.filters.length; i++){
      if (i == index){
        this.filters[i].active = true;
      } else {
        this.filters[i].active = false;
      }
    }
    this.filterSelected.emit(index);
  }

  constructor() { }

  ngOnInit() {
  }

}
