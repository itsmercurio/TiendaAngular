import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit{


  images: any[] = []
  constructor(private imageService: ImageService){}
  ngOnInit(): void {
      
    this.imageService.getCategoryImages().subscribe(
      (data)=>{this.images = data.categories || data;
        console.log(data);
      },
      (error)=>{console.error(error);}
    );
  }

}
