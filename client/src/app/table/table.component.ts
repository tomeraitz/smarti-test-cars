import { Component, OnInit,Input,Output, EventEmitter, OnChanges  } from '@angular/core';
import {Cars} from '../cars'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() cars:Cars[]
  @Output() closePopup = new EventEmitter();
  @Output() openPopup = new EventEmitter();
  public isPopup:boolean;
 
  constructor() { }

  appOpenPopup(id:number){
    this.openPopup.emit(id)
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if(changes.cars && changes.cars.previousValue){
      if(changes.cars.currentValue.length  ===  changes.cars.previousValue.length-1) this.closePopup.emit();
    }
    
  }

}
