// src/app/app.component.ts
import { Component } from '@angular/core';
import { DataListComponent } from './data-list/data-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataListComponent], // Importa tu componente aquí
  template: `
    <h1>CRUD con Angular 19 y Firebase</h1>
    <app-data-list></app-data-list>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-firebase-angular19';
}
