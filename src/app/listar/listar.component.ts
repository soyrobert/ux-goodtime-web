import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    NgFor
  ]
})
export class ListarComponent {

  @Input() title: string = 'Alarmas';

  alarms = [
    {
      title: 'Despertar',
      time: '06:00 AM',
      image: '/images/alarm1.jpg'
    },
    {
      title: 'Llevar al jardín',
      time: '07:00 AM',
      image: '/images/alarm2.jpg'
    },
    {
      title: 'Reunión de trabajo',
      time: '03:00 PM',
      image: '/images/alarm3.jpg'
    },
    {
      title: 'Recoger a mi hijo al Jardin',
      time: '04:00 AM',
      image: '/images/alarm4.jpg'
    },
    {
      title: 'Preparar entrega de la semana',
      time: '06:00 PM',
      image: '/images/alarm5.jpg'
    }
  ];

  // Métodos para manejar las acciones de los botones (compartir, editar, eliminar)
  shareAlarm(alarm: any): void {
    alert(`Compartiendo alarma: ${alarm.title}`);
  }

  editAlarm(alarm: any): void {
    alert(`Editando alarma: ${alarm.title}`);
  }

  deleteAlarm(alarm: any): void {
    alert(`Eliminando alarma: ${alarm.title}`);
  }
}
