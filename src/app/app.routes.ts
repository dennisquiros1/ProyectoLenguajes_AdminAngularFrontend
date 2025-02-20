import { Routes } from '@angular/router';
//Course
import { CourseAddComponent } from './course/course-add/course-add.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseEditComponent } from './course/course-edit/course-edit.component';
import { CourseListComponent } from './course/course-list/course-list.component';
//Course-comment
import { CourseCommentDetailsComponent } from './course-comment/course-comment-details/course-comment-details.component';
import { CourseCommentListComponent } from './course-comment/course-comment-list/course-comment-list.component';
//Home
import { HomeComponent } from './home/home.component';
//Login
import { LoginComponent } from './login/login.component';
//News
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsListComponent } from './news/news-list/news-list.component';
//News-comment
import { NewsCommentDetailsComponent } from './news-comment/news-comment-details/news-comment-details.component';
import { NewsCommentListComponent } from './news-comment/news-comment-list/news-comment-list.component';
//Page-Not-Found
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//Professor
import { ProfessorAddComponent } from './professor/professor-add/professor-add.component';
import { ProfessorDetailsComponent } from './professor/professor-details/professor-details.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
//Student
import { StudentApprovalComponent } from './student/student-approval/student-approval.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';

export const routes: Routes = [
    //Landing page
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    //Course
    { path: 'course-list', component: CourseListComponent},
    { path: 'course-add', component: CourseAddComponent},
    { path: 'course-details/:id', component: CourseDetailsComponent}, 
    { path: 'course-edit/:id', component:CourseEditComponent},
    //Course-comment
    { path: 'course-comment-list/:id', component:CourseCommentListComponent},
    { path: 'course-comment-details/:id', component:CourseCommentDetailsComponent},
    //home
    { path: 'home', component:HomeComponent},
    //login
    { path: 'login', component: LoginComponent},
    //News
    { path: 'news-list', component: NewsListComponent},
    { path: 'news-details/:id', component: NewsDetailsComponent},
    { path: 'news-add', component: NewsAddComponent },
    { path: 'news-edit/:id', component: NewsEditComponent},
    //News-comment
    { path: 'news-comment-list/:id', component: NewsCommentListComponent},
    { path: 'news-comment-details/:id', component: NewsCommentDetailsComponent },
    //Professor
    { path: 'professor-add', component: ProfessorAddComponent},
    { path: 'professor-list', component: ProfessorListComponent},
    { path: 'professor-details/:id', component: ProfessorDetailsComponent},
    //Student
    { path: 'student-list', component: StudentListComponent },
    { path: 'student-approval/:id', component: StudentApprovalComponent },
    { path: 'student-details/:id', component: StudentDetailsComponent },
    //PageNotFound
    { path: '**', component: PageNotFoundComponent}


];
