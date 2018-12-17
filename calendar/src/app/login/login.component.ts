import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { Key } from '../Data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
  user = {
    username: "",
    password: "",
  }

  constructor(private userData: UserdataService) { }

  ngOnInit() {
  }

  onHandleForm(e) {
    this.user[e.target.name] = e.target.value;
  }

  onSubmitLogin() {
    this.userData.onLogin(this.user.username, this.user.password)
      .subscribe(response => {
        localStorage.setItem("username", (response as Key).success.username);
        window.location.href = "/";
      });
  }

  onSubmitSignUp() {
  }
}
