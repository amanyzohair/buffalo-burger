import { OrderService } from './../services/order.service';
import { DatabaseService } from './../services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
oders$;
  constructor(
    private dbServ: DatabaseService,
    private ordServ: OrderService,
  ) {
    this.oders$ = this.dbServ.getOrder();
  }

  ngOnInit() {}
  unOrder(id){
    this.ordServ.removeOrder(id)
  }
}
