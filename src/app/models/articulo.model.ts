export class Articulo {
    id: number;
    nombre: string;
    categoria: string;
    imagen: string;
    precio: number;
    precioOferta: number | null;
    favorito: boolean;
    tallas: Talla[];

    constructor(
        id: number,
        nombre: string,
        categoria: string,
        imagen: string,
        precio: number,
        precioOferta: number | null,
        favorito: boolean,
        tallas:Talla[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.imagen = imagen;
        this.precio = precio;
        this.precioOferta = precioOferta;
        this.favorito = favorito;
        this.tallas = tallas;
    }
}

export interface Talla {
    size: string;
    disponible: boolean;
  }

export class ArticulosResponse {
  articulos: Articulo[];

  constructor(articulos: Articulo[]) {
    this.articulos = articulos;
  }
}


