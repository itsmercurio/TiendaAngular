import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../models/articulo.model';
import { SubcomponentCardComponent } from '../subcomponent-card/subcomponent-card.component';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CommonModule, RouterModule, SubcomponentCardComponent],
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  categoria: string = '';  
  articuloId: string = '';
  articulos: Articulo[] = [];

  constructor(
    private route: ActivatedRoute,
    private articulosService: ArticulosService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.categoria = params.get('categoria') || '';
      this.articuloId = params.get('id') || '';

      console.log('Categoría desde la ruta:', this.categoria);
      console.log('Articulo ID desde la ruta:', this.articuloId);

      this.articulosService.getAll().subscribe(
        (data) => {
          this.articulos = data; 
          console.log('Todos los artículos:', this.articulos);
        },
        (error) => {
          console.error('Error al obtener los artículos:', error);
        }
      );
    });
  }
}
