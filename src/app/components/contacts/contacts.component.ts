import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from 'src/app/services/firebase-db.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  persone:any;

  constructor(private firebase: FirebaseDbService ) {}

  ngOnInit(): void {
    this.firebase.getPersone('https://db-test-5520b-default-rtdb.europe-west1.firebasedatabase.app/persone.json').subscribe((data: any)  => {
        this.persone = Object.keys(data).map((key)=> {
          data[key]['id'] = key;
          return data[key];
        });


        console.log(this.persone);
      }
    );
  }
}
