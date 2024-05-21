import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {producto} from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URI = "http://localhost:4000/productos/productos";

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<producto[]>(this.URI);
  }
}
