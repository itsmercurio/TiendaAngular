import { HomeComponent } from "./pages/home/home.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";

export const routes = [
    {path:'', name:'Tienda',component: HomeComponent},
    {path:'nosotros', name:'Nosotros',component: NosotrosComponent}
];
