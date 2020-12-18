import { OrderService } from './../services/order.service';
import { DatabaseService } from './../services/database.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-most-reviewed',
  templateUrl: './most-reviewed.component.html',
  styleUrls: ['./most-reviewed.component.scss'],
})
export class MostReviewedComponent implements OnInit {
  products$ ;
  prodDetails;
  constructor(
    private dbSrv: DatabaseService,
    private ordSrv: OrderService,
  ) {
    this.products$ = this.dbSrv.getproduct()
  }
  order(pro){
    
    this.prodDetails = this.dbSrv.getOrderById(pro).subscribe(u =>
      {
        if(u){
          this.ordSrv.addOrder(u);
        }
      }
      )
  }
  ngOnInit() {}
  
}
