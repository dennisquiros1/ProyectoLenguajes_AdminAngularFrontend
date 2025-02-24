import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/api" //Put the rest of the route, like student, professor, etc.
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

  getStudents(): Observable<any>{
    return this.http.get<any> (API_URL + "/student/getAllStudent", HTTP_OPTIONS);
    //to do: handling errors
  }

  getStudentById(id: any): Observable<any>{
    return this.http.get<any> (API_URL + "/student/getStudent/" + id, HTTP_OPTIONS);
  }

  deleteStudent(id: any): Observable<any>{
    return this.http.delete<any> (API_URL + "/student/deleteStudent/" + id, HTTP_OPTIONS);
  }

  saveStudent(student: any): Observable<any>{
    return this.http.post<any> (API_URL + "/student/postStudent", student, HTTP_OPTIONS);
  }

  getProfessors(): Observable<any>{
    return this.http.get<any> (API_URL + "/professor/getAllProfessor", HTTP_OPTIONS);
  }

  getProfessorById(id : any): Observable<any>{
    return this.http.get<any> (API_URL + "/professor/getProfessor/" + id, HTTP_OPTIONS);
  }

  deleteProfessor(id : any): Observable<any>{
    return this.http.delete<any> (API_URL + "/professor/deleteProfessor/" + id, HTTP_OPTIONS);
  }

  addProfessor(professor : any): Observable<any>{
    return this.http.post<any> (API_URL +"/professor/postProfessor", professor, HTTP_OPTIONS);
  }

}
