import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MostReviewedComponent } from '../most-reviewed/most-reviewed.component';
import { OrderComponent } from '../order/order.component';
import { FoodComponent } from '../food/food.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    
  ],
  declarations: [
    HomePage,
    MostReviewedComponent,
    OrderComponent,
    FoodComponent
  ]
})
export class HomePageModule {}
