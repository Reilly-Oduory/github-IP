import { Component, OnInit } from '@angular/core';
import { UserRetrivalService } from '../user-retrival.service';
import { RepoRetrievalService } from '../repo-retrieval.service';

@Component({
  selector: 'app-user-searchform',
  templateUrl: './user-searchform.component.html',
  styleUrls: ['./user-searchform.component.css']
})
export class UserSearchformComponent implements OnInit {

  login!:string;
  userRetrivalService!: UserRetrivalService;
  repoRetrievalService! :RepoRetrievalService;

  submitUserName(){
    this.userRetrivalService.userRequest(this.login);
    this.repoRetrievalService.repoRequest(this.login);
  }

  constructor(userRetrivalService: UserRetrivalService, repoRetrievalService :RepoRetrievalService) { 
    this.userRetrivalService = userRetrivalService;
    this.repoRetrievalService = repoRetrievalService;
  }

  ngOnInit(): void {
  }

}
