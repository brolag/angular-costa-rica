import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  img = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/51927970_592970787780817_9100521214681546752_o.png?_nc_cat=107&_nc_ht=scontent-sjc3-1.xx&oh=d67fd836ce6a00ea28f55875a17eaebc&oe=5D6958C4';

  socialLinks = [
    {name:'twitter', link:'https://twitter.com/AngularCR'},
    {name:'facebook', link:'https://www.facebook.com/angularcostarica'},
    {name:'medium', link:'https://medium.com/angularcostarica'},
    {name:'youtube',link:'https://www.youtube.com/channel/UC4vCnqA5s8IR2zCcSXp63_w'}
  ];
}
