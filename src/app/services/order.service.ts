import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db : AngularFireDatabase,
  ) { }
  addOrder(ord){
    this.db.list('/order').push(ord) ;
  }
  removeOrder(id:string){
    return this.db.object('/order/'+ id).remove()
  }
}
