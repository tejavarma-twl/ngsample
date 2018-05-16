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
  inlineStyles = {
                  'backgroundColor':'#00aa00',
                  'color':'#99aa00',
    'font-size':'22px'
                };

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
