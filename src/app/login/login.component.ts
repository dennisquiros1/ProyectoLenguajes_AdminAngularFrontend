import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { CommsService } from '../comms.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  lId: string = '';
  lPassword: string = '';




  constructor(private router: Router, private restService: RestService, private commService: CommsService) {

    


  }
  
  AuthenticateAdm() {
    const administrator = {
      id: this.lId,
      password: this.lPassword
    };

    this.restService.validateAdministrator(administrator).subscribe({
      next: (response: any) => {
        if (response.message === 'Authentication successful') {
          this.router.navigate(['/home']);
          this.commService.triggerShowElementsEvent();
        } else {
          alert('Invalid credentials');
        }
      },
      error: (error: any) => {
        console.error('Error during authentication', error);
        alert('An error occurred during authentication: ' + error.message);
      }
    });
  }
}
