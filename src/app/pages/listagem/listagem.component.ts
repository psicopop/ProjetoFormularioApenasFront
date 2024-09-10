import { Component, OnInit } from '@angular/core';
import { FormularioService, Formulario } from '../../services/formulario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Listagem de Formulários</h2>
    <ul>
      <li *ngFor="let formulario of formularios">
        Nome: {{ formulario.nomes }} | CPF: {{ formulario.cpf }} | Telefone: {{ formulario.telefone }}
        <button (click)="deleteFormulario(formulario.id)">Excluir</button>
      </li>
    </ul>
  `,
})
export class ListagemComponent implements OnInit {
  formularios: Formulario[] = [];

  constructor(private formularioService: FormularioService) {}

  ngOnInit() {
    this.formularioService.getFormularios().subscribe(data => {
      this.formularios = data;
    });
  }

  deleteFormulario(id: number) {
    this.formularioService.deleteFormulario(id).subscribe(() => {
      this.formularios = this.formularios.filter(f => f.id !== id);
      console.log('Formulário excluído com sucesso!');
    });
  }
}
