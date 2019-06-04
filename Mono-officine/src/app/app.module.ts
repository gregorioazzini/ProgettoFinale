import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { HttpClientModule } from '@angular/common/http';
import { MappaComponent } from './mappa/mappa.component';

import { AgmCoreModule } from '@agm/core';

import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    MappaComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUI8LYmnHPyFrtRT8Q8IEREZfOygUl-U'
    }),
     RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

