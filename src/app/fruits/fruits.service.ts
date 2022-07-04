import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Fruits} from "./fruits";

const baseUrl = 'http://localhost:3000/fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor( private http : HttpClient) { }

  get() {
    return this.http.get<Fruits[]>('http://localhost:3000/fruits');
  }

  create(payload: Fruits) {
    return this.http.post<Fruits>('http://localhost:3000/fruits', payload);
  }

  getById(id :number) {
    return this.http.get<Fruits>(`${baseUrl}/${id}`);
  }

  update(payload : Fruits) {
    return this.http.put<Fruits>(`http://localhost:3000/fruits/${payload.id}`,payload);
  }

  delete(id :number) {
    return this.http.delete<Fruits>(`${baseUrl}/${id}`);
  }
}
