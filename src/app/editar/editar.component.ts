import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    
  ]
})
export class EditarComponent implements OnInit {
  editAlarmForm!: FormGroup;
  @Input() title: string = 'Editar alarma';
  selectedImageUrl: any;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.editAlarmForm = this.fb.group({
      hour: ['07', Validators.required],
      minute: ['30', Validators.required],
      alarmName: ['Despertar', [Validators.required, Validators.minLength(3)]],
      description: ['Despertar a los peques y alistar sus útiles escolares y el lunch. Organizar todo para que tengan una mañana sin prisas y lleguen listos a la escuela.', Validators.required],
      timeFormat: ['AM', Validators.required],
      days: this.fb.group({
        lu: [true],
        ma: [true],
        mi: [false],
        ju: [true],
        vi: [true],
        sa: [false],
        do: [false],
      })
    });
  }

  saveAlarm(): void {
    if (this.editAlarmForm.valid) {
      console.log('Alarm data:', this.editAlarmForm.value);
  
      this.snackBar.open('Alarma actualizada', '', {
        duration: 2500,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: ['custom-snackbar']
      });
  
      setTimeout(() => {
        this.router.navigate(['/listado']);
      }, 2700);
    } else {
      console.log('Form is not valid');
    }
  }
  

  goBack(): void {
    this.router.navigate(['/listado']);

  }

  selectImage(): void {
    // Lógica para seleccionar una imagen
  }
}
