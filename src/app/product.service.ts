import { Injectable } from "@angular/core";
import { Product } from "./product";
import { HttpClient } from "@angular/common/http";
import { take, tap } from "rxjs/operators";
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private _products: Product[];
  private DBUrl = "http://localhost:3000/products";
  showProduct = false;

  constructor(private http: HttpClient, private userSrv: UserServiceService) {
    const price = () => Math.floor(10 + 100 * Math.random());
    this.http
      .get<Product[]>(`${this.DBUrl}`)
      .pipe(
        // tslint:disable-next-line: no-console
        tap(objs => console.debug('Object', objs)),
        take(1)
      )
      .subscribe(obj => {
        if (Object.keys(obj).length === 0) {
          this.showProduct = false;
        } else {
          this._products = obj;
          console.log(this._products);
          this.showProduct = true;
        }
      });
      if (Object.keys(this.userSrv.currentUser).length !== 0) {
        this.showProduct = false;
      }
  }

  get all(): Product[] {
    return this._products;
  }
}
