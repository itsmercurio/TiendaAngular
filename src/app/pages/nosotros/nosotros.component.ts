import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent implements OnInit {

  image: any;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    const id = 1;
    this.imageService.getImageById(id).subscribe(
      (data) => { this.image = data;
       },
      (error) => {console.error(error); }
      );
  }
}
