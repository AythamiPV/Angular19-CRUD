// src/app/data-list/data-list.component.ts
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';

interface Fruta {
  id?: string;
  NAME: string;
}

@Component({
  selector: 'app-data-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, AsyncPipe],
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  frutas$: Observable<Fruta[]>;
  newFrutaName: string = '';
  selectedFruta: Fruta | null = null;
  editFrutaName: string = '';

  constructor(private firebaseService: FirebaseService) {
    this.frutas$ = this.firebaseService.getCollectionData<Fruta>('Frutas');
    console.log('Observable frutas$ creado en el constructor:', this.frutas$); // Para diagnóstico
  }

  ngOnInit(): void {
    this.frutas$.subscribe(
      (frutas) => {
        console.log('Datos emitidos por el Observable en ngOnInit:', frutas); // Para diagnóstico
      },
      (error) => {
        console.error('Error al suscribirse al Observable en ngOnInit:', error); // Para diagnóstico
      }
    );
  }

  addFruta() {
    if (this.newFrutaName.trim()) {
      this.firebaseService.addDocument('Frutas', { NAME: this.newFrutaName })
        .then(() => {
          this.newFrutaName = '';
          console.log('Fruta added successfully!');
        })
        .catch(error => console.error('Error adding fruta:', error));
    }
  }

  selectFruta(fruta: Fruta) {
    this.selectedFruta = { ...fruta };
    this.editFrutaName = this.selectedFruta.NAME;
  }

  updateFruta() {
    if (this.selectedFruta && this.editFrutaName.trim()) {
      this.firebaseService.updateDocument('Frutas', this.selectedFruta.id!, { NAME: this.editFrutaName })
        .then(() => {
          this.selectedFruta = null;
          this.editFrutaName = '';
          console.log('Fruta updated successfully!');
        })
        .catch(error => console.error('Error updating fruta:', error));
    }
  }

  deleteFruta(frutaId: string) {
    if (confirm('¿Estás seguro de que quieres eliminar esta fruta?')) {
      this.firebaseService.deleteDocument('Frutas', frutaId)
        .then(() => console.log('Fruta eliminada correctamente!'))
        .catch(error => console.error('Error al eliminar la fruta:', error));
    }
  }
}
