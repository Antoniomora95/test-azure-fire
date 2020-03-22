import { Component, OnInit } from '@angular/core';
import { Users } from './model/users';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  title = 'firebase-app';
  user: Users = new Users('', '', '', false);
  constructor(private userService: UserService) {
  }
  OnInit() {
    
   }
   saveUser(user) {
     this.loading = true;
     this.userService.createUser(user).then((res) => {
       setTimeout(() => {
        this.loading = false;
        console.log(res);
       }, 800);
      }).catch((err) => {
        this.loading = false;
        console.log(err);
     });
  }

}




