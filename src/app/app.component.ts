import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result : boolean = false;
  randomText : string = faker.lorem.sentence();
  inputText : string = '';
  onChangeInput(text:string)
  {
    this.inputText = text;
  }

  compair(letterIntered : string,inputTextIndex : string):string
  {
    if(!inputTextIndex)
    {
      return 'pending';
    }
    return letterIntered === inputTextIndex ? 'correct' : 'incorrect';

  }
}
