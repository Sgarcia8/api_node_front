import { Component, OnInit } from '@angular/core';

import { CategoriaServiceService } from '../../services/categoria-service.service';
import { Categoria} from '../../interfaces/Categoria';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrl: './navegador.component.css'
})
export class NavegadorComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(private CategoriaService: CategoriaServiceService){}


  ngOnInit(): void {
    this.CategoriaService.getCategorias()
      .subscribe(
        res => {
          this.categorias = res
        },
        err => console.log(err)
      )
  }

  selectCategoria(id:number) {
    console.log(id);
  }

}
