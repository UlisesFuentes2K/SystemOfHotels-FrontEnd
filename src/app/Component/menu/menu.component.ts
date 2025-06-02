import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router:Router, private userService:UserService) {}

  irProfile(){
    this.router.navigate(['profile']);
  }

  irLogin(){
    this.router.navigate(['login']);
  }

  irUser(){
    this.router.navigate(['user']);
  }

  irHome(){
    this.router.navigate(['home']);
  }

  irRegister(){
    this.router.navigate(['register']);
  }

  cerrarSesion(){
    const id = localStorage.getItem("Id") || "0";

    this.userService.logoutUser(id).subscribe({
      next:()=>{this.router.navigate(['login']);},
      error:(error)=>{console.error("Error al cerrar la sesión", error);}
    })
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const tokenExp = JSON.parse(atob(token.split('.')[1])).exp * 1000;
    return Date.now() < tokenExp;
}
}
