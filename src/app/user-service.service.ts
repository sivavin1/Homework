import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  currentUser : User;
  private DBUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

 /* login(userName: string, passWord: string)
  {
    console.log('Username',userName,'Password',passWord);
    this.currentUser = new User('sivakumar','password','Sivakumar Subramanian', 36,'Male',new Date("2019-01-16"),'https://randomuser.me/api/portraits/women/65.jpg');
  }*/

  signIn(Iusername: string, Ipassword: string): Observable<User> {
    return this.http
      .get<User>(`${this.DBUrl}?username=${Iusername}&password=${Ipassword}`)
      .pipe(
        // tslint:disable-next-line: no-console
        tap(objs => console.debug('Object', objs)),
        take(1)
      );
  }

  setUser(pUser : object){
    //this.currentUser = pUser;
    this.currentUser=Object.assign(new User(), pUser);
  }

  getUser() : User{
    console.log('inside GetUser');
    return this.currentUser;
  }
}
