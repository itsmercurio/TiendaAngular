import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{

  images: any[] = [];
  constructor(private imageService:ImageService){}
  ngOnInit(): void {
      
    this.imageService.getImages().subscribe(
      (data)=>{this.images=data.images || data;
      },
      (error)=>{console.error(error);}
    );

    
  }

}
