import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommsService } from '../comms.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private commService: CommsService) {}

  AuthenticateStudent() {
    this.router.navigate(['/home']);
    this.commService.triggerShowElementsEvent();
  }
}
