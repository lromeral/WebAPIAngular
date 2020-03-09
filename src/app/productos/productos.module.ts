import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductosRoutingModule, routingComponents } from './productos.routing.module';
import { TableModule } from 'primeng/table';
import { ProductosService } from './productos.service';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [ProductosRoutingModule, CommonModule, SharedComponentsModule, FormsModule, TableModule],
  declarations: [routingComponents],
  providers: [ProductosService]
})
export class ProductosModule {}