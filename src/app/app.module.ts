import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployComponent } from './addemploy/addemploy.component';
import { EmploydeleteComponent } from './employdelete/employdelete.component';
import { EmploysearchComponent} from './employsearch/employsearch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
  
const myroutes=[{path:"",component:AddemployComponent},
{path:"employdelete",component:EmploydeleteComponent},
{path:"employsearch",component:EmploysearchComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AddemployComponent,
    EmploydeleteComponent,
    EmploysearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
