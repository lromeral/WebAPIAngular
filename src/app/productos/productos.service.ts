import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IProducto } from './models/producto.interface';

@Injectable()
export class ProductosService {

  urlAPI = environment.urlServidor;

  constructor(public http: HttpClient) { }

  getProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(this.urlAPI + 'Productos');
  }

  addProducto(producto: IProducto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.urlAPI + 'Productos', producto,  { headers: headers });
  }

  updateProducto(producto: IProducto): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(this.urlAPI + 'Productos/' + producto.id, producto, { headers: headers });
  }

  deleteProducto(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type':'application/json' });
    
    return this.http.delete(this.urlAPI + 'Productos/' + id, { headers: headers });
  }

}