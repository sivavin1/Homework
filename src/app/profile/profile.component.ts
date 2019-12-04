import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  CurrentUserHeader: User;

  constructor(public userSvc: UserServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userSvc.signInUser(this.route.snapshot.paramMap.get('username'))
        .subscribe(obj => {
          console.log('Obj =', obj);
          if (Object.keys(obj).length !== 0) {
            this.userSvc.setUser(obj);
            this.CurrentUserHeader = this.userSvc.getUser();
            // this.showSignOut = true;
          }
        });
      }

}
