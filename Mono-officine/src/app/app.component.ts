import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Registrazione } from './reg.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Mono-officine';
    mostra = false;
    login = false;

    constructor(private http: HttpClient) {

    }
    onlogin() {
        if (this.login) {
            this.login = false
        } else {
            this.login = true
        }
    }
    onClick(nome: HTMLInputElement, cognome: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement, cartacredito: HTMLInputElement): boolean {
        console.log(nome.value, cognome.value, username.value, password.value, cartacredito.value);

        this.http.post<Registrazione>('http://node13.codenvy.io:34327/register', {
            'nome': nome.value,
            'cognome': cognome.value,
            'username': username.value,
            'password': password.value,
            'cartadicredito': cartacredito.value,

        },
            {
                headers:
                    new HttpHeaders(
                        {
                            'Content-Type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                            'Access-Control-Allow-Origin': '*'
                        }
                    )
            }
        )
            .subscribe(data => {
                console.log(data);
            });




        if (this.mostra == false) {
            this.mostra = true;

        }
        return false;

    }

}
