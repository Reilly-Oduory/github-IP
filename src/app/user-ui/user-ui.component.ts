import { Component, OnInit } from '@angular/core';
import { UserRetrivalService } from '../user-retrival.service';
import { User } from '../user';

@Component({
  selector: 'app-user-ui',
  templateUrl: './user-ui.component.html',
  styleUrls: ['./user-ui.component.css']
})
export class UserUIComponent implements OnInit {

  user!:User;
  userRetrivalService!: UserRetrivalService;

  toggleDetails(){
    this.user.showDescription = !this.user.showDescription
  }

  constructor(userRetrivalService: UserRetrivalService) { 
    this.userRetrivalService = userRetrivalService;
  }

  ngOnInit() {
    this.user = this.userRetrivalService.user
  }

}
