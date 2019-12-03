import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  Object: any;
  constructor(
    public productSvc: ProductService, public userSvc: UserServiceService
  ) { }
}
