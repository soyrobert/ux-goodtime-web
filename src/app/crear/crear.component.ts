import { Component, inject, Input } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CrearComponent {
  @Input() title: string = 'Agregar nueva alarma';
  addAlarmForm!: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    this.addAlarmForm = this.fb.group({
      hour: ['', Validators.required],
      minute: ['', Validators.required],
      alarmName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      timeFormat: ['', Validators.required],
      days: this.fb.group({
        lu: [false],
        ma: [false],
        mi: [false],
        ju: [false],
        vi: [false],
        sa: [false],
        do: [false],
      })
    });
  }

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

  goBack() {
    this.router.navigate(['/listado']);
  }

  selectImage() {
    console.log('Image selected!');
  }

  saveAlarm(): void {
    if (this.addAlarmForm.valid) {
      console.log('Alarm data:', this.addAlarmForm.value);
  
      this.snackBar.open('Alarma agregada', '', {
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
}
