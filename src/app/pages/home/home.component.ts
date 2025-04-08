import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CarouselComponent } from "../../components/carousel/carousel.component";
import { BannerComponent } from "../../components/banner/banner.component";
import { ImageService } from '../../services/image.service';
import { CategoriasComponent } from "../../components/categorias/categorias.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CarouselComponent, BannerComponent, CategoriasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  
  

}
