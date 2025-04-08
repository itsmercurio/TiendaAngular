import { ArticuloCardComponent } from "./components/articulo-card/articulo-card.component";
import { ArticulosComponent } from "./components/articulos/articulos.component";
import { HomeComponent } from "./pages/home/home.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";

export const routes = [
    {path:'', name:'Tienda',component: HomeComponent},
    {path:'nosotros', name:'Nosotros',component: NosotrosComponent},
    {path:'articulo/:categoria',component: ArticulosComponent},
    {path:'articulo/:categoria/:id',component: ArticuloCardComponent}
];
