import { Component, Input } from '@angular/core';
import { Articulo } from '../../models/articulo.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-subcomponent-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './subcomponent-card.component.html',
  styleUrls: ['./subcomponent-card.component.css']
})
export class SubcomponentCardComponent {
  @Input() articulo!: Articulo;

  constructor() { }
}
