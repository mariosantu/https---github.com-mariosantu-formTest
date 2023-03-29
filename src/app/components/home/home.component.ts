import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { FirebaseDbService } from 'src/app/services/firebase-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // nome?: string;

  // @ViewChild('homeform') homeform: NgForm | undefined;

  // onSubmit(formData: any) {
  //   console.log(formData.value.name);

  //   if (formData.value.name) {
  //     this.nome = formData.value.name;
  //   } else {
  //     alert('insert name');
  //   }
    
  // }

  homeform!: FormGroup;

  constructor(private firebaseDb : FirebaseDbService, private authService: AuthService) {}

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      color: new FormControl()
    })
  }

  onSubmit() {
    // console.log(this.homeform.value.nome);
    // console.log(this.homeform.value.email);
    // console.log(this.homeform.value.color);

    this.firebaseDb.insertPersona('https://db-test-5520b-default-rtdb.europe-west1.firebasedatabase.app/persone.json', 
    {nome: this.homeform.value.nome , email : this.homeform.value.email, colore: this.homeform.value.color}
    ).subscribe(data => {
      console.log(data);
    });

  }

  onDeletePersona() {
    this.firebaseDb.deletePersona('https://db-test-5520b-default-rtdb.europe-west1.firebasedatabase.app/persone', '-NPrXFfVU1ZK-CE_DP5j')
    .subscribe(data => {
      console.log(data);
    })
  }

  onPatchPersona() {
    this.firebaseDb.patchPersona('https://db-test-5520b-default-rtdb.europe-west1.firebasedatabase.app/persone', '-NPrNrHPFaW9E_gFnPVv',{ email: 'sgrodanti@gmail.com'})
    .subscribe(data => {
      console.log(data);
    })
  }

  onPutPersona() {
    this.firebaseDb.putPersona('https://db-test-5520b-default-rtdb.europe-west1.firebasedatabase.app/persone', '-NPrNrHPFaW9E_gFnPVv',{ hobby: 'Pc Gaming'})
    .subscribe( data => {
      console.log(data);
    })
  }

  // onLogOut() {
  //   this.authService.logOut;
  // }
}
