import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = "https://localhost:8080/api" //Put the rest of the route, like student, professor, etc.
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  getStudents(){
    return this.http.get<any> (API_URL + "/student/getUnacceptedStudents", HTTP_OPTIONS);
    //to do: handling errors
  }
}
