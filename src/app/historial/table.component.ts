import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgFor
  ]
})
export class HistorialComponent {

  @Input() title: string = 'Historial';
  constructor(private router: Router) {}

  alarms = [
    {
      id: 1,
      title: 'Despertar',
      time: '06:00 AM',
      image: '/images/alarm1.jpg'
    },
    {
      id: 2,
      title: 'Llevar al jardín',
      time: '07:00 AM',
      image: '/images/alarm2.jpg'
    },
    {
      id: 3,
      title: 'Reunión de trabajo',
      time: '03:00 PM',
      image: '/images/alarm3.jpg'
    },
    {
      id: 4,
      title: 'Recoger a mi hijo al Jardin',
      time: '04:00 AM',
      image: '/images/alarm4.jpg'
    },
    {
      id: 5,
      title: 'Preparar entrega de la semana',
      time: '06:00 PM',
      image: '/images/alarm5.jpg'
    }
  ];
  
  deleteHistory(): void {
    alert(`Eliminando historial...`);
  }

  deleteAlarm(alarm: any): void {
    alert(`Eliminando alarma del historial: ${alarm.title}`);
  }

  back(): void {
    this.router.navigate(['/crear']);
  }

}
