import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  someName = 'Angular';
  myColor = '#FFAA00';
  showthis = 0;
  classSwitch = true;
  about = true;
  contact = false;
  products = false;
  services = false;
  inlineStyles = {
                  'backgroundColor':'#00aa00',
                  'color':'#99aa00',
    'font-size':'22px'
                };

  fruits = [
    'apples',
    'bananas',
    'papayas',
    'oranges'
  ];
  cars = [
    {name:'BMW',color:'White'},
    {name:'Audi',color:'Black'},
    {name:'Merc',color:'Silver'},
    {name:'Jaguar',color:'Blue'},
    {name:'BMW',color:'White'},
    {name:'Audi',color:'Black'},
    {name:'Merc',color:'Silver'},
    {name:'Jaguar',color:'Blue'}
  ];

  menuclick(page){
    if(page === 'about'){
      this.about = true; this.contact = false; this.products = false; this.services = false;
    }else if(page === 'contact'){
      this.contact = true; this.about = false; this.products = false; this.services = false;
    }else if(page === 'products'){
      this.products = true; this.contact = false; this.about = false; this.services = false;
    }else {
      this.services = true; this.contact = false; this.products = false; this.about = false;
    }
  }

  buttonClicked(value){
    this.someName = value;
  }

  addThisData(val){
    this.someName = val.target.value;
  }

  bindingButtonClicked(){
    if(this.myColor=='#FFAA00'){
      this.myColor = '#00AAFF';
    }else{
      this.myColor = '#FFAA00';
    }
  }

  switchingClass(){
    if(this.classSwitch==true){
      this.classSwitch = false;
    }else{
      this.classSwitch = true;
    }
  }
}
