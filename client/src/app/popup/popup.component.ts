import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import {Cars} from '../cars';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() closePopup = new EventEmitter();
  @Output() deleteCar = new EventEmitter();
  @Input() car:Cars;
  constructor() { }

  ngOnInit(): void {
  }

  appClosePopup(){
    this.closePopup.emit()
  }

  appDeleteCar(id:number){
    console.log("in appDeleteCar : ", id)
    this.deleteCar.emit(id)
  }

}
