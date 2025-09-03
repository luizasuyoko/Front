import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3009/usuarios';
  private readonly CHAVE_AUTH = 'usuarioLogado';


  constructor(private router: Router, private http: HttpClient) { }

  //funcao para registrar um novo usuario
  registrar(usuario: any):Observable<any>{
    //antes de registrar -> verificar se usuário jáesta cadastrado
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      switchMap(res => {
        //se emial já existe
        if(res.length > 0){
          //criando um erro para o sistema -> para que o erro seja tratado, rodar a função dentro de um try/catch
          return throwError(()=> new Error ("Usuario Já Existe.")); //para o programa aqui, se usuário já existir
        }
        //caso contrário -> cadastrar o usuário novo
        return this.http.post<any>(this.apiUrl, usuario);
      })
    )
  }

  //função para logar o usuário
  login(credenciais: any):Observable<boolean>{
    //passar o email e a senha para procurar o usuario no bd 
    return this.http.get<any[]>(`${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
      map(usuario => {
        //usuário encontrado
        if(usuario.length > 0){
          //grava no armazenamento interno do navegador (a chave de autenticação do usuario)
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario[0]));
          return true; 
        }
        //caso nao seja encontrado -> retorna falso
        return false;
      })
    )
  }

  //função de logout
  logout(){
    // limpo o armazenamento interno
    localStorage.removeItem(this.CHAVE_AUTH);
    //redireciona para a página de login / home 
    this.router.navigate(["/login"]);
  }

  //função para verificarse o usuario esta autenticado
  estaAutenticado(): boolean{
    //uso de dupla negação => transformo em uma boolean
    return !! localStorage.getItem(this.CHAVE_AUTH);
  }

  //função para pegar as informações do usuário 
  usuarioAtual(): any{
    // convertepara json as infromações do usuário
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || "{}")
  }
}
