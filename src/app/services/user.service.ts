import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Users } from '../model/users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dbPath = '/users';
  userRef: AngularFireList<Users> = null;
  constructor(private dataBase: AngularFireDatabase) {
  }
  createUser(user: Users) {
   return this.dataBase.list('users').push(user).then((res) => {
     return res;
   }).catch((err) => {
     return err;
   });
  }
  getUsers(): Observable<Array<Users>> {
    return this.dataBase.list('users', (ref) => {
      return ref.limitToFirst(100).orderByChild('firstname');
    }).snapshotChanges().pipe(
      map(DataSnapshootArray => {
        return DataSnapshootArray.map(dataSnapshoot => {
          const user: any = dataSnapshoot.payload.val();
          const key = dataSnapshoot.key;
          return new Users(key, user.firstname, user.lastname, user.bloqued, user.age);
        });
      }));
  }
  deleteUser(key) {
    console.log(key);
    return this.dataBase.list('users').remove(key);
  }
}
