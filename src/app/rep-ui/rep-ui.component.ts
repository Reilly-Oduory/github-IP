import { Component, OnInit } from '@angular/core';
import { Repo } from '../repo';
import { RepoRetrievalService } from '../repo-retrieval.service';

@Component({
  selector: 'app-rep-ui',
  templateUrl: './rep-ui.component.html',
  styleUrls: ['./rep-ui.component.css']
})
export class RepUIComponent implements OnInit {

  repoRetrievalService!:RepoRetrievalService;
  repos: any;

  constructor(repoRetrievalService: RepoRetrievalService) { 
    this.repoRetrievalService = repoRetrievalService;
  }

  ngOnInit() {
    this.repos = this.repoRetrievalService.repoReturn
  }

}
