import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formTest';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.authService.createUser(user.email, user.id, user._token, user._expirationDate);
    }
  }

  onLogOut() {
    this.authService.logOut();
  }
}
