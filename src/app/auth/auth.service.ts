import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiKey = 'AIzaSyD6ufy7HIgSfqDLnu4XlzCm1hIwc4fKRi0'
    signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
    signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;
    isLoggedin = true;
    isAdmin = true;
    user: any;

    constructor(private http: HttpClient) {}

    createUser(email: string, id: string, token: string, expirationDate: Date){
        this.user = new User(email, id , token, expirationDate);
        this.isLoggedin = true;
    }

    isAuthenticated() {
        return this.isLoggedin
    }

    isRoleAdmin() {
        return this.isAdmin
    }

    signUp(email: string,  password: string) {
        return this.http.post(this.signUpUrl, {email: email, password: password, returnSecureToken: true})
    }

    signIn(email: string,  password: string) {
        return this.http.post(this.signInUrl, {email: email, password: password, returnSecureToken: true})
    }

    logOut() {
        console.log('ciao');
        this.isLoggedin = false;
        this.user = null;
        localStorage.removeItem('user');
    }

}