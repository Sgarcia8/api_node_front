import { Component, OnInit } from '@angular/core';
import {ProductoService} from "../../services/producto.service"


@Component({
  selector: 'app-productos-vista',
  standalone: true,
  imports: [],
  templateUrl: './productos-vista.component.html',
  styleUrl: './productos-vista.component.css'
})
export class ProductosVistaComponent implements OnInit{
  productos = [];

  constructor(private productosService: ProductoService){}

  ngOnInit(){
    this.productosService.getProductos()
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }
}
