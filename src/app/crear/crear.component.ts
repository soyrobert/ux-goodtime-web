import { Component, inject, Input } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class CrearComponent {
  @Input() title: string = 'Agregar nueva alarma';

  hour: any;
  minute: any;
  timeFormat: any;
  alarmName: any;
  description: any;
  days = {
    lu: false,
    ma: false,
    mi: false,
    ju: false,
    vi: false,
    sa: false,
    do: false,
  };
  selectedImageUrl: any;

  saveAlarm() {
    console.log('Alarm saved!');
  }

  goBack() {
    console.log('Back button clicked!');
  }

  selectImage() {
    console.log('Image selected!');
  }
}
