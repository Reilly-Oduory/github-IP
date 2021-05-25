import { Component, OnInit } from '@angular/core';
import { UserRetrivalService } from '../user-retrival.service';

@Component({
  selector: 'app-user-searchform',
  templateUrl: './user-searchform.component.html',
  styleUrls: ['./user-searchform.component.css']
})
export class UserSearchformComponent implements OnInit {

  login!:string;
  userRetrivalService!: UserRetrivalService;

  submitUserName(){
    this.userRetrivalService.userRequest(this.login)
  }

  constructor(userRetrivalService: UserRetrivalService) { 
    this.userRetrivalService = userRetrivalService
  }

  ngOnInit(): void {
  }

}
