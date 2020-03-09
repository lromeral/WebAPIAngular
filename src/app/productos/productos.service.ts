import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IProducto } from './models/producto.interface';
import { UrlApiServidor } from './../services/url-api-servidor';

@Injectable()

export class ProductosService {

  urlAPI = environment.urlServidor;
  urlAPIServidor: UrlApiServidor;

  constructor(public http: HttpClient) {
    this.urlAPIServidor = new UrlApiServidor();
  }

  getProductos(): Observable<IProducto[]> {
    const headers = this.urlAPIServidor.getHeaders();

    return this.http.get<IProducto[]>(this.urlAPI + 'Productos', { headers: headers });
  }

  addProducto(producto: IProducto): Observable<any> {
    
    const headers = this.urlAPIServidor.getHeaders();

    return this.http.post(this.urlAPI + 'Productos', producto, { headers: headers });
  }

  updateProducto(producto: IProducto): Observable<any> {
    
    const headers = this.urlAPIServidor.getHeaders();

    return this.http.put(this.urlAPI + 'Productos/' + producto.id, producto, { headers: headers });
  }

  deleteProducto(id: number): Observable<any> {
    const headers = this.urlAPIServidor.getHeaders();

    return this.http.delete(this.urlAPI + 'Productos/' + id, { headers: headers });
  }

}