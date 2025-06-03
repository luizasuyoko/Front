import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root'
})
export class VagasService {
  private apiUrl = "http://localhost:3008/vagas"; //endereceo da api

  constructor(private http: HttpClient) { }

  //criar os metodos para conexao com apiRest

  //get - obter a lista de vagas
  getVagas(): Observable<Vaga[]>{ //observable -> rxjs => tradutor de json -> typescript
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  //post 

  //put

  //delete
}
