import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categoria } from '../interfaces/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  URI = 'http://localhost:4000/categorias'

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(this.URI)
  }
}
