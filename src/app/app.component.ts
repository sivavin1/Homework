import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CurrentUser : User;
  showWelcome : boolean;
  constructor(private pUserService: UserServiceService){
    //this.CurrentUser = pUserService.getUser();
  }

  onAddPost(postData : User){
    (postData === undefined)? this.CurrentUser = postData : (this.CurrentUser = postData[0], this.showWelcome=true);
   // console.log('In OnAddPost',this.CurrentUser);
  }
  
}
