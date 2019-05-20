import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-officine';



constructor(private http: HttpClientModule) {

 }

 onClick(nome: HTMLInputElement, cognome : HTMLInputElement, username : HTMLInputElement, password : HTMLInputElement, cartacredito: HTMLInputElement ) : boolean
  {
    console.log(nome, cognome, username, password, cartacredito);

    return false;
  }

}
