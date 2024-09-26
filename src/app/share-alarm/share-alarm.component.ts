
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor(private router: Router,private snackBar: MatSnackBar, ) {}

  onExit(): void {
    this.router.navigate(['/listado']); 
  }

  onShareAlarm(){
    this.snackBar.open('Alarma compartida', '', {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left',
      panelClass: ['custom-snackbar']
    });

    setTimeout(() => {
      this.router.navigate(['/listado']);
    }, 2700);
  }

}
