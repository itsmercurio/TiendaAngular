import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit{
  images: any[] = []

  constructor(private imageService: ImageService){

  }

  ngOnInit(): void {
      this.imageService.getBannerImages().subscribe(
        (data)=>{this.images = data.images || data;},
        (error)=>{console.error(error);}
      );
    }
}
