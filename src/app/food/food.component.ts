import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  products$ ;
  prodDetails;
  isFavourite: boolean = false;
  constructor(
    private dbSrv: DatabaseService,
    private ordSrv: OrderService,
  ) {
    this.products$ = this.dbSrv.getproduct()
  }

  ngOnInit() {}
  order(pro){
    
    this.prodDetails = this.dbSrv.getOrderById(pro).subscribe(u =>
      {
        if(u){
          this.ordSrv.addOrder(u);
        }
      }
      )
  }
  like(id){
    this.isFavourite = !this.isFavourite;
  }
  
}
