import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router:Router) {}

  irProfile(){
    this.router.navigate(['profile']);
  }

  irUser(){
    this.router.navigate(['user']);
  }

  irHome(){
    this.router.navigate(['home']);
  }
}
