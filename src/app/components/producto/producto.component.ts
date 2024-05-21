import { Component, OnInit } from '@angular/core';

import {ProductoServiceService} from '../../services/producto-service.service'
import {Producto} from '../../interfaces/Producto'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {

  productos: Producto[] = [];

  constructor(private ProductoService: ProductoServiceService){ }

  ngOnInit() {
    this.ProductoService.getProductos()
      .subscribe(
        res => {
          this.productos = res
        },
        err => console.log(err)
      )
  }
}
