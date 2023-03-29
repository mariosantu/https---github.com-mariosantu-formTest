import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService: AuthService) {}


  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signIn(email, password).subscribe(
      (data: any) => {
        console.log(data);
        
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
        this.authService.createUser(data.email, data.localId, data.idToken, expirationDate);
        localStorage.setItem('user', JSON.stringify(this.authService.user));

        console.log(this.authService.user);

      }
    )
    form.reset();

  }
}
