import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { IndexComponent } from "./pages/index/index.component";
import { JsComponent } from "./pages/js/js.component";
import { StylesComponent } from "./pages/styles/styles.component";



const app_routes: Routes= [
    {path: 'home', component: HomeComponent},
    {path: 'index', component: IndexComponent},
    {path: 'styles', component: StylesComponent},
    {path: 'app', component: JsComponent},
    {path: '**', pathMatch: "full", redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);