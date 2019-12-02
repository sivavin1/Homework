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
        this.pUserService.setUser(obj);
        //console.log('Returned from Service', this.pUserService.currentUser);
        this.CurrentUserHeader = this.pUserService.getUser();
        //console.log('Got from Service', this.CurrentUserHeader);
        this.postData.emit(this.CurrentUserHeader);
        this.showSignOut = true;
      });

  }

}
