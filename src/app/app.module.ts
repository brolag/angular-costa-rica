import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SocialLinkComponent } from './social-link/social-link.component';
import { OrganizersComponent } from './organizers/organizers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SocialLinkComponent, OrganizersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
