import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  private apiURL = "https://reqres.in/api"


constructor(private http : HttpClient) { }

 

  get_users(){
    return this.http.get(this.apiURL + '/users?page=2');
  }

  create_user() {
    return this.http.post(this.apiURL + '/users', this.httpOptions);
  }

  update_user() {
    return this.http.put(this.apiURL + '/users/2', this.httpOptions);
  }

  delete_User(){
    return this.http.delete(this.apiURL + '/users/2', this.httpOptions);
  }


}