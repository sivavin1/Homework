import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  CurrentUserHeader: User;

  constructor(
    public productSvc: ProductService, public userSvc: UserServiceService
  ) {}
}
