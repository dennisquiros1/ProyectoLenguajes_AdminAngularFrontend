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

  //Student methods
  
  getStudents(): Observable<any>{
    return this.http.get<any> (API_URL + "/student/getAllStudent", HTTP_OPTIONS);
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

  //Professor

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

  //Admin

  validateAdministrator(administrator: any): Observable<any> {
    return this.http.post<any>(API_URL + "/administrator/validateAdministrator", administrator, HTTP_OPTIONS);
  }

  getAdministratorDataFromSession(): Observable<any> {
    return this.http.get<any>(API_URL + "/administrator/getAdministratorDataFromSession", HTTP_OPTIONS);
  }

  //Courses
  getCourses(): Observable<any> {
    return this.http.get<any>(API_URL + "/course/getAllCourse", HTTP_OPTIONS);
  }

  getCourseById(id: string): Observable<any> {
    return this.http.get<any>(`${API_URL}/course/getCourse/${id}`, HTTP_OPTIONS);
  }

  postCourse(course: any): Observable<any> {
    return this.http.post<any>(`${API_URL}/course/postCourse`, course, HTTP_OPTIONS);
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/course/deleteCourse/${id}`, HTTP_OPTIONS);
  }
  getCommentByCourseAcronym(acronym: string): Observable<any> {
    return this.http.get(`${API_URL}/commentCourse/getCommentByCourseAcronym/${acronym}`, HTTP_OPTIONS);
  }
  getCommentById(commentId: string): Observable<any> {
    return this.http.get(`${API_URL}/commentCourse/getCommentCourse/${commentId}`, HTTP_OPTIONS);
  }
  deleteCommentCourse(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/commentCourse/deleteCommentCourse/${id}`);
  }
  
  //News

  getNews(): Observable<any>{
    return this.http.get<any> (API_URL + "/breakingNew/getAllBreakingNew", HTTP_OPTIONS);
  }

  getNewById(id : any): Observable<any>{
    return this.http.get<any> (API_URL + "/breakingNew/getBreakingNew/"+ id, HTTP_OPTIONS);
  }

  deleteNewById(id : any): Observable<any>{
    return this.http.delete<any> (API_URL + "/breakingNew/deleteBreakingNew/"+id, HTTP_OPTIONS);
  }

  postNew(news : any): Observable<any>{
    return this.http.post<any> (API_URL +"/breakingNew/postBreakingNew", news, HTTP_OPTIONS);
  }

  getAllNewsComments(id: any): Observable<any>{
    return this.http.get<any> (API_URL+ "/commentNew/getCommentByNewId/"+id, HTTP_OPTIONS);
  }

  deleteNewsComment(id : any): Observable<any>{
    return this.http.delete<any> (API_URL + "/commentNew/deleteCommentNew/"+id, HTTP_OPTIONS);
  }

  getCommentnew(id: any): Observable<any>{
    return this.http.get<any> (API_URL+"/commentNew/getCommentNew/"+id, HTTP_OPTIONS);
  }


}
