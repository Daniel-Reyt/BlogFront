import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_form: FormGroup;

  enterUsername;
  enterPassword;

  constructor(private fb: FormBuilder,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.login_form = this.fb.group({
      lg_username: '',
      lg_password: '',
    })
  }

  login() {
      this.enterUsername = this.login_form.controls.lg_username.value;
      this.enterPassword = this.login_form.controls.lg_password.value;

      console.log('login user with username : ' + this.enterUsername + ', password : ' + this.enterPassword);
      this.http.get('http://localhost:8080/api/user').toPromise().then((data) => {
        console.log(data)
        for (let i = 0; i < data.length; i++) {
          if (this.enterUsername === data[i].username) {
            console.log(this.enterUsername + ' est le bon username')
            if (this.enterPassword === data[i].password) {
              console.log(this.enterPassword + ' est le bon password');
              this.router.navigate(['/home']);
            } else {
              console.log(this.enterPassword + ' n\'est pas le bon password')
            }
          }
        } 
      }).catch((err) => {
        console.log(err)
      })

  }
}
