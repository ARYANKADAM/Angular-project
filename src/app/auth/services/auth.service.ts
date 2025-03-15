import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IRegister {
  name : string;
  email : string;
  password : string;
  phone: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5005/api/users';
  

  constructor(private httpClient: HttpClient) {}

    registerUser(user: IRegister): Observable<any> {
      return this.httpClient.post(this.apiUrl, user);
    }
}
