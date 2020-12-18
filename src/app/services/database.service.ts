import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(
    private db: AngularFireDatabase,
  ) { }

  getproduct(){
    return this.db.list('/products').snapshotChanges();
  }
  getOrderById(id){
    return this.db.object('/products/'+ id).valueChanges();
  };
  getOrder(){
    return this.db.list('/order').snapshotChanges();
  }
}
