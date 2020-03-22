import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listUsers: Users[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe({
      next: (arrayUsers) => {
        this.listUsers = arrayUsers;
      },
      error: (err) => console.log(err)
    });
  }
  deleteUser(user: Users) {
    this.userService.deleteUser(user.key);
  }
}
