import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) {

    }

  ngOnInit() {
  }
onClick(username: HTMLInputElement, password: HTMLInputElement){
    this.http.get('http://node13.codenvy.io:34327/login/'+ username.value + '/' + password.value,
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
}
}
