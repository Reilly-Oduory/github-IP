import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repo } from './repo';

@Injectable({
  providedIn: 'root'
})
export class RepoRetrievalService {

  repo!: Repo;
  repoReturn = [];
  newRepoData: any = [];

  constructor(private http: HttpClient) { 
    this.repo = new Repo('','')
  }

  repoRequest(login:string) {
    let promise = new Promise((resolve,reject) => {
      this.http.get<any>('https://api.github.com/users/' + login + '/repos').toPromise().then(response => {
        for(let i = 0; i<response.length; i++) {
          this.newRepoData = new Repo(response[i].name, response[i].html_url)
          this.repoReturn.push(this.newRepoData);
        }
        resolve
      },
      error => {
        console.log('nothing found')
        reject(error)
      })
    })
    return promise
  }
}
