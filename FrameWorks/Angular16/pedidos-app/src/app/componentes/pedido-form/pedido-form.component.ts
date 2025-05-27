import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Cliente } from 'src/app/models/cliente.model';
import { Pedido } from 'src/app/models/pedido.model';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
  public clientes: Cliente[] = [];
  public produtos: Produto[] = [];
  clienteSelecionadoId = "";
  produtoSelecionadoId: string[] = [];
  desconto = 0;

  constructor(private dadosService: DadosService){
    this.clientes = dadosService.getClientes();
    this.produtos = dadosService.getProdutos();
  }

  //métodos
  //selecionar os produtos
  selecionarProdutos(id: string){
    const index = this.produtoSelecionadoId.indexOf(id);
    if(index < 0) {//index >=0 o produto foi selecionado
      this.produtoSelecionadoId.push(id); //adicina o produto selecionado 
    }else{
      this.produtoSelecionadoId.splice(index, 1); //remove o produto nao selecionado
    }
  }

  salvarPedido(){
    const cliente = this.clientes.find(c => c.id.toString() === this.clienteSelecionadoId)
    const produtos = this.produtos.filter(p => this.produtoSelecionadoId.includes(p.id.toString()));
    if (!cliente || produtos.length === 0) {
      alert("Selecione um cliente e pelo menos um produto");
      return
    } else{
      const pedido = new Pedido(
        this.dadosService.getPedidos().length +1,
        cliente,
        produtos,
        this.desconto
      );
      this.dadosService.adicionarPedidos(pedido);
      this.clienteSelecionadoId = "";
      this.produtoSelecionadoId = [];
      this.desconto = 0;
      alert("Pedido Criado com Sucesso!!!");
    }
  }
}
