import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import {Cars} from '../cars';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css', '../app.component.css']
})
export class FormComponent implements OnInit {
  public company:string;
  public type:string;
  public color:string;
  public selected: any;
  public companyPlaceholder:string;
  public typePlaceholder:string;
  public colorPlaceholder:string;
  @Output() clickFormEvent = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  @Input() formType:string;
  @Input() cars:Cars[];
  constructor() { }

  ngOnInit(): void {
    if(this.formType === 'create'){
      this.companyPlaceholder = "Enter company name";
      this.typePlaceholder = "Enter type car";
      this.colorPlaceholder = "Enter color car"
    }
    else{
      this.companyPlaceholder = `Replace : ${this.cars[0].company}`;
      this.typePlaceholder = `Replace : ${this.cars[0].type}`;
      this.colorPlaceholder = `Replace : ${this.cars[0].color}`;
      this.selected = this.cars[0].id;
    }
  }

  submit():void{
    if(!this.company && !this.type && !this.color) return;
    this.clickFormEvent.emit({
      id : this.formType === 'edit' ? this.selected*1 : null,
      company : this.company,
      type : this.type,
      color : this.color
    })
  }

  appCloseForm():void{
    this.closeForm.emit();
  }

  onOptionsSelected():void{
    const car = this.cars.find(car => car.id === this.selected*1);
    this.companyPlaceholder = `Replace : ${car.company}`;
    this.typePlaceholder = `Replace : ${car.type}`;
    this.colorPlaceholder = `Replace : ${car.color}`;
    this.selected = car.id;
  }
}
