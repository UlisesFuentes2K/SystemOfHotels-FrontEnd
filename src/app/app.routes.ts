import { Routes } from '@angular/router';
import { MenuComponent } from './Component/menu/menu.component';
import { LoginComponent } from './Component/login/login.component';
import { CambioPasswordComponent } from './Component/cambio-password/cambio-password.component';
import { HomeComponent } from './Component/home/home.component';
import { RegistroComponent } from './Component/registro/registro.component';
import { PerfilComponent } from './Component/perfil/perfil.component';
import { UserComponent } from './Component/user/user.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'register', component: RegistroComponent},
    {path:'login', component: LoginComponent},
    {path:'change_password', component:CambioPasswordComponent},
    {
        path:'',
        component: MenuComponent,
        children:[
            {path:'profile', component: PerfilComponent},
            {path:'home', component:HomeComponent},
            {path:'user', component:UserComponent}
        ]
    },
    {path:'**', redirectTo:'login'}
];
