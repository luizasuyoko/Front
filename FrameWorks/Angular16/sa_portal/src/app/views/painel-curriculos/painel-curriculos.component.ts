import { Component } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.mode';
import { curriculosService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss']
})
export class PainelCurriculosComponent {
  public curriculo: Curriculo = new Curriculo(0, "", "", "");

  public curriculos: Curriculo[] = []; 
  constructor(private _curriculosService: curriculosService){
  }

  ngOnInit(): void{
    this.listarCurriculos();
  }

  listarCurriculos(): void {
    this._curriculosService.getCurriculo().subscribe(
      (e) => {
        this.curriculos = e.map(
          (curriculo) => Curriculo.fromMap(curriculo)
        );
      }, (error) => {
        console.error("Erro ao Listar Currículos: ", error);
      }
    );
  }
  listarCurriculoPorId(curriculo: Curriculo): void {
    this.curriculo = curriculo;
  }

  cadastrarCurriculo(): void {
    this._curriculosService.postCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, "", "", "");
        this.listarCurriculos();
      }, (error) => {
        console.error("Erro ao Cadastrar Currículo: ", error);
      }
    );
  }
  atualizarCurriculo(id: any): void {
    this._curriculosService.putCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, "", "", "");
        this.listarCurriculos();
      }, (error) => {
        console.error("Erro ao Atualizar Currículo: ", error);
      }
    );
  }
  excluirCurriculo(id: any): void {
    this._curriculosService.deleteCurriculo(id).subscribe(
      () => {
        this.listarCurriculos();
      }, (error) => {
        console.error("Erro ao Excluir Currículo: ", error);
      }
    );
  }
}
