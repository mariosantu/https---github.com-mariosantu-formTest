import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  homeform?: any;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password).subscribe(
      data => {
        console.log(data)
      }
    )
    form.reset();

  }

  
}
