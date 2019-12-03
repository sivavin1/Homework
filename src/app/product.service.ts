import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http'
import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products: Product[];
  private DBUrl = 'http://localhost:3000/products';
  showProduct : boolean = false;

  constructor(private http : HttpClient) {
    const price = () => Math.floor(10 + 100 * Math.random());
  
    this.http
    .get<Product[]>(`${this.DBUrl}`)
    .pipe(
      // tslint:disable-next-line: no-console
      tap(objs => console.debug('Object', objs)),
      take(1)
    ) .subscribe(obj => {
      console.log('Obj =', obj);
      if (Object.keys(obj).length === 0) {
        // console.log('undefined in header')
        this.showProduct = false;
      }
      else {
        this._products = obj
       // this.postData.emit(this.CurrentUserHeader);
        this.showProduct = true;
      }
    });
  }

  get all(): Product[] { return this._products; }

}
