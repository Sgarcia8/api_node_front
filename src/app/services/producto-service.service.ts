import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Producto} from '../interfaces/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  URI = 'http://localhost:4000/productos'
  URIC = 'http://localhost:4000/productosC'

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<Producto[]>(this.URI)
  }

  getProductosC(id:number){
    return this.http.get<Producto[]>(`${this.URIC}/${id}`)
  }
}
