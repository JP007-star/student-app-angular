import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:8080/";

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}readAllStudents`);
  }
  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}createStudent?name=${student.name}&age=${student.age}&fee=${student.fee}`, student);
  }
  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}studentById?id=${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}updateStudent`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}deleteStudent?studentId=${id}`);
  }
}
