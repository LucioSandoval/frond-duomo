import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPersonaComponent } from './list-persona/list-persona.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterPersonaComponent } from './register-persona/register-persona.component';
import { FormsModule } from '@angular/forms';
import { UpdatePersonaComponent } from './update-persona/update-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonaComponent,
    RegisterPersonaComponent,
    UpdatePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
