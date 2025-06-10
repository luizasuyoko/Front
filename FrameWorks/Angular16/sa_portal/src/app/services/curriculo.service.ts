import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.mode';

@Injectable({
  providedIn: 'root'
})
export class curriculosService{
    private apiUrl = "http://localhost:3008/curriculos"

    constructor(private http: HttpClient) { }
    // getCurriculoByUsuarioId
    getCurriculoByUserId(id: any): Observable<Curriculo[]>{
        const url = this.apiUrl + "/" + id;
        return this.http.get<Curriculo[]>(url);
    }
    
}