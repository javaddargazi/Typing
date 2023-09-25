import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  randomText : string = faker.lorem.sentence();
  onChangeInput(text:string)
  {
    console.log(text);
  }
}
