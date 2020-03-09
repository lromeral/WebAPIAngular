import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';
import { IProducto } from '../models/producto.interface';

@Component({
  selector: 'app-crud-productos',
  templateUrl: 'crud-productos.component.html',
  styleUrls: ['crud-productos.component.css']
})
export class CrudProductosComponent implements OnInit {

  cols: any[];
  editando = false;
  productos: IProducto[] = [];
  producto: IProducto = {
    id: 0,
    nombre: null,
    precio: 0
  };

  constructor(private productosService: ProductosService) {
  }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'ID', width: '10%' },
      { field: 'nombre', header: 'Nombre', width: '45%' },
      { field: 'precio', header: 'Precio', width: '45%' },
    ];
    this.getProductos();
  }

  getProductos() {
    this.productos = [];
    this.productosService.getProductos().subscribe(
      data => {
        this.productos = data;
      },
      err => alert('Error en el acceso a datos'),
      () => console.log('OK')
    );
  }

  addProducto() {
    this.productosService.addProducto(this.producto).subscribe(
      data => {
        this.producto = {
          id: 0,
          nombre: null,
          precio: 0
        };
        console.log(data);
      },
      err => { 
        console.log (err);
       // alert('Error en el proceso de alta'); 
       this.getProductos()
      },
      () => this.getProductos()
    );
  }

  editProducto(producto: IProducto) {
    this.editando = true;
    this.producto.id = producto.id;
    this.producto.nombre = producto.nombre;
    this.producto.precio = producto.precio;
  }

  cancel() {
    this.editando = false;
    this.producto = {
      id: 0,
      nombre: null,
      precio: 0
    };
  }

  updateProducto() {
    this.productosService.updateProducto(this.producto).subscribe(
      data => { console.log(data); },
      err => { console.log(err);this.getProductos(); },
      () => { this.cancel(); this.getProductos(); }
    );
  }

  deleteProducto(id: number) {
    if (confirm('¿Estás seguro?')) {
      this.productosService.deleteProducto(id).subscribe(
        data => { console.log(data); },
        err => { console.log(err); this.getProductos()},
        () => this.getProductos()
      );
    }
  }

  datosCompletos(): boolean {
    const nombreCompleto: boolean = this.producto.nombre != null && this.producto.nombre.trim() !== '';
    const precioCompleto: boolean = this.producto.precio != null;
    return nombreCompleto && precioCompleto;
  }
}
