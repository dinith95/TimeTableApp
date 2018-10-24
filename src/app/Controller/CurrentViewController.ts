import  { environment } from '../../environments/environment';
import {AngularFireDatabase} from '@angular/fire/database';



export  class CurrentViewController {
  // var database ;
  constructor(db: AngularFireDatabase){
    db.list('/Friday/Lecture01').snapshotChanges().subscribe((data) => {
      console.log(data);

    });
    db.list('/Friday/Lecture01').valueChanges().subscribe((data) => {
      console.log(data);
    });

  }

  getInfo(){

  }



}
