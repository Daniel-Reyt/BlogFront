import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register_form: FormGroup;

  enterUsername;
  enterPassword;

  constructor(private fb: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.register_form = this.fb.group({
      lg_username: '',
      lg_password: '',
    })
  }

  login() {
      this.enterUsername = this.register_form.controls.lg_username.value;
      this.enterPassword = this.register_form.controls.lg_password.value;

      this.http.post('http://localhost:8080/api/user', {
        usernameE: this.enterUsername,
        passwordE: this.enterPassword
      }).toPromise().then((data) => {
        console.log(data)
      })
  }
}