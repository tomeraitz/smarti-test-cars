import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Cars } from './cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public cars:Cars[] = [];
  public popup:boolean;
  public car:Cars;
  public from = {isOpen : false, formType: null};
  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.car=null;
    this.popup = false;
    this.http.getData().subscribe(data => {
     if(!data.error) this.cars = data;
     else console.error(data.error)
    });
  }

  deleteCar(id:number){
    this.http.deleteData(id).subscribe(data => {
      if(!data.error) this.cars = data;
      else console.error(data.error)
    });
  }

  addCar(dataInput:{company: string, type:string, color : string}){
    this.http.addData(dataInput).subscribe(data => {
      if(!data.error) this.cars = data;
      else console.error(data.error)
      this.from.isOpen = false;
      this.from.formType = null;
    });
  }

  editCar(dataInput:{company: string, type:string, color : string}){
    this.http.editData(dataInput).subscribe(data => {
      if(!data.error) this.cars = data;
      else console.error(data.error)
      this.from.isOpen = false;
      this.from.formType = null;
    });
  }

  checkIfCanOpenForm(){
    if(!this.from.isOpen) return false;
    if(this.from.formType === 'create') return true;
    return this.cars.length > 0;
  }

  clickFormEvent(dataInput:{company: string, type:string, color : string}){
    for(let key in dataInput){
      if(!dataInput[key]) delete dataInput[key];
    }
    if(this.from.formType === 'create') this.addCar(dataInput)
    else this.editCar(dataInput)
  }

  openPopup(id): void{
    this.popup = true;
    this.car = this.cars.find(car=>car.id ===id)
  }

   closePopup( ): void{
    setTimeout(()=>{
      this.car=null;
      this.popup = false;
    },1)

  }

  openForm(type:string){
    this.from.isOpen = true;
    this.from.formType = type;
  }

  closeForm( ): void{
    this.from.isOpen = false;
    this.from.formType = null;
  }
}
