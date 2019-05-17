import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-officine';

constructor(public http : HttpClient) { }

  onClick(nome: HTMLInputElement, cognome : HTMLInputElement, username : HTMLInputElement, password : HTMLInputElement, cartacredito: HTMLInputElement ) : boolean
  {
    console.log(nome, cognome, username, password, cartacredito);
    return false;
  }
}
