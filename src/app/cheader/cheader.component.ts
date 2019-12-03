import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-cheader',
  templateUrl: './cheader.component.html',
  styleUrls: ['./cheader.component.css']
})
export class CheaderComponent implements OnInit {
  @Output() postData = new EventEmitter<User>();
  showSignOut = false;
  CurrentUserHeader: User;

  constructor(private pUserService: UserServiceService) { }

  ngOnInit() {
  }

  login(userName: HTMLInputElement, passWord: HTMLInputElement) {
    this.pUserService.signIn(userName.value, passWord.value)
      .subscribe(obj => {
        console.log('Obj =', obj);
        if (Object.keys(obj).length === 0) {
          // console.log('undefined in header')
          this.showSignOut = false;
        }
        else {
          this.pUserService.setUser(obj);
          this.CurrentUserHeader = this.pUserService.getUser();
          this.postData.emit(this.CurrentUserHeader);
          this.showSignOut = true;
        }
      });

  }

  logout() {
    this.CurrentUserHeader = undefined;
    this.postData.emit(this.CurrentUserHeader);
    this.showSignOut = false;
  }

}
