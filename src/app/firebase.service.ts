// src/app/firebase.service.ts
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(environment.firebaseConfig); // Corrección: Accede a environment.firebaseConfig
  private db = getFirestore(this.app);

  constructor() { }

  /**
   * Obtiene una referencia a una colección específica.
   * @param collectionName El nombre de la colección.
   * @returns Una referencia a la colección.
   */
  collectionRef(collectionName: string) {
    return collection(this.db, collectionName);
  }

  /**
   * Obtiene una referencia a un documento específico dentro de una colección.
   * @param collectionName El nombre de la colección.
   * @param docId El ID del documento.
   * @returns Una referencia al documento.
   */
  docRef(collectionName: string, docId: string) {
    return doc(this.db, collectionName, docId);
  }

  /**
   * Agrega un nuevo documento a una colección.
   * @param collectionName El nombre de la colección.
   * @param data Los datos del nuevo documento.
   * @returns Una promesa con la referencia del documento creado.
   */
  addDocument(collectionName: string, data: any) {
    return addDoc(this.collectionRef(collectionName), data);
  }

  /**
   * Actualiza un documento existente.
   * @param collectionName El nombre de la colección.
   * @param docId El ID del documento a actualizar.
   * @param data Los datos actualizados.
   * @returns Una promesa que se resuelve cuando la actualización es exitosa.
   */
  updateDocument(collectionName: string, docId: string, data: any) {
    return updateDoc(this.docRef(collectionName, docId), data);
  }

  /**
   * Elimina un documento de una colección.
   * @param collectionName El nombre de la colección.
   * @param docId El ID del documento a eliminar.
   * @returns Una promesa que se resuelve cuando la eliminación es exitosa.
   */
  deleteDocument(collectionName: string, docId: string) {
    return deleteDoc(this.docRef(collectionName, docId));
  }

  /**
   * Obtiene todos los documentos de una colección y los observa en tiempo real.
   * @param collectionName El nombre de la colección.
   * @returns Un Observable que emite un array de documentos con sus IDs.
   */
  getCollectionData<T>(collectionName: string): Observable<T[]> {
    return new Observable((subscriber) => {
      onSnapshot(this.collectionRef(collectionName), (snapshot) => {
        const data: T[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
        subscriber.next(data);
      }, (error) => {
        subscriber.error(error);
      });
    });
  }

  /**
   * Obtiene un documento específico de una colección y lo observa en tiempo real.
   * @param collectionName El nombre de la colección.
   * @param docId El ID del documento.
   * @returns Un Observable que emite el documento con su ID.
   */
  getDocumentData<T>(collectionName: string, docId: string): Observable<T | undefined> {
    return new Observable((subscriber) => {
      onSnapshot(this.docRef(collectionName, docId), (snapshot) => {
        const data = snapshot.data() as T | undefined;
        subscriber.next(data ? { id: snapshot.id, ...data } : undefined);
      }, (error) => {
        subscriber.error(error);
      });
    });
  }
}
