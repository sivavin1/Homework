import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-csidebar',
  templateUrl: './csidebar.component.html',
  styleUrls: ['./csidebar.component.css']
})
export class CsidebarComponent implements OnInit {

  showContant = false;
  @Input() loggedUser : User;

  constructor() { }

  ngOnInit() {
  
  }

}
