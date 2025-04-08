import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../../services/articulos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-articulo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articulo-card.component.html',
  styleUrl: './articulo-card.component.css'
})
export class ArticuloCardComponent implements OnInit{

  articuloId: string = '';
  articuloDetalle: any = {};

  constructor(
    private route: ActivatedRoute,
    private articulosService: ArticulosService
  ) { }

  ngOnInit(): void {
    this.articuloId = this.route.snapshot.paramMap.get('id') || '';
    this.articulosService.getArticuloPorId(this.articuloId).subscribe(
      (data) => {
        this.articuloDetalle = data;
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener el artículo:', error);
      });
  }
}
