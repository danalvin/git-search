import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid ='69335d0fbb7af2b1175b';
  private clientsecret ='e730a3ea59028a76b8697a6d4abce8e84656d3de';

  constructor(private http:Http) {
    console.log('Ready service');
    this.username = 'danalvin';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/"+ this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));
  }

  getProfileRepos(){
   return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" +this.clientsecret)
   .pipe(map(res =>res.json()));
 }
  updateProfile(username:string){
    this.username = username;

  }
}
