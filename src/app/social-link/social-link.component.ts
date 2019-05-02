import { Component,  AfterContentInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css']
})
export class SocialLinkComponent implements AfterContentInit {

  @Input() 
  link: string;

  @Input() 
  name: string;

  className = '';

  ngAfterContentInit() {
     this.className = `fab fa-${this.name}`;
  }

  constructor() { }

}