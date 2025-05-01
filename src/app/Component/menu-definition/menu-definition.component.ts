import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu-definition',
  standalone: true,
  imports: [MenuComponent, CommonModule, SidebarModule, ButtonModule],
  templateUrl: './menu-definition.component.html',
  styleUrl: './menu-definition.component.css'
})
export class MenuDefinitionComponent {
  
  sidebarVisible = signal(false);

  toggleSidebar() {
    this.sidebarVisible.set(!this.sidebarVisible());
  }
}
