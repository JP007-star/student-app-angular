import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    students :Student[] | undefined;
    constructor(private studentService: StudentService,
      private router: Router) { }

    ngOnInit(): void {
      this.getStudents();
    }

    private getStudents(){
      this.studentService.getStudentList().subscribe(data => {
        this.students = data;
      });
    }

    studentDetails(id: number){
      this.router.navigate(['student', id]);
    }

    updateStudent(id: number){
      this.router.navigate(['update-student', id]);
    }
    deleteStudent(id: number){
      this.studentService.deleteStudent(id).subscribe( data => {
        console.log(data);
        this.getStudents();
      })
    }
}




