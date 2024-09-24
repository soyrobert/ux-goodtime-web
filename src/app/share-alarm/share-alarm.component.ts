
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-share-alarm',
  standalone: true,
  templateUrl: './share-alarm.component.html',
  styleUrl: './share-alarm.component.scss',
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
})
export class ShareAlarmComponent {

  constructor(private router: Router) {}

  onExit(): void {
    this.router.navigate(['/listado']); 
  }

}
