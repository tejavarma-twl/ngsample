import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  someName = 'Angular';
  showthis = 0;
  buttonClicked(value){
    this.someName = value;
  }
  addThisData(val){
    this.someName = val.target.value;
  }

}
