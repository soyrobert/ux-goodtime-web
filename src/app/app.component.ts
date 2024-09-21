import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule, 
    MatIconModule, 
    LayoutComponent, 
    RouterOutlet, 
    WelcomeComponent,
    CommonModule
  ],
})
export class AppComponent {
  title = 'goodtime-web';
  showWelcome = true; // Muestra la pantalla de bienvenida al inicio

  // Método para ocultar el Welcome y mostrar la app principal
  hideWelcome() {
    this.showWelcome = false;
  }
}
