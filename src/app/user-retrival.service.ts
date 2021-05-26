import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRetrivalService {

  user! : User;

  constructor(private http:HttpClient) { 
    this.user = new User('','','',0)
  }

  userRequest(login:string){
    interface ApiResponse {
      login:string;
      html_url:string;
      name:string;
      public_repos:number;
    }
    let promise = new Promise((resolve,reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + login).toPromise().then(response => {
        this.user.login = response.login;
        this.user.url = response.html_url;
        this.user.name = response.name;
        this.user.repos = response.public_repos;
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
