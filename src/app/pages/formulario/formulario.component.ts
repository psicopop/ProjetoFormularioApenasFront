import { Component } from '@angular/core';
import { FormularioService, Formulario } from '../../services/formulario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Formulário</h2>
    <form (ngSubmit)="onSubmit()" #formularioForm="ngForm">
      <label for="nomes">Nome:</label>
      <input id="nomes" [(ngModel)]="formulario.nomes" name="nomes" required />

      <label for="cpf">CPF:</label>
      <input id="cpf" [(ngModel)]="formulario.cpf" name="cpf" required />

      <label for="telefone">Telefone:</label>
      <input id="telefone" [(ngModel)]="formulario.telefone" name="telefone" type="number" required />

      <button type="submit">Enviar</button>
    </form>
  `,
})
export class FormularioComponent {
  formulario: Formulario = { id: 0, nomes: '', cpf: '', telefone: 0 };

  constructor(private formularioService: FormularioService) {}

  onSubmit() {
    this.formularioService.createFormulario(this.formulario).subscribe(response => {
      console.log('Formulário enviado com sucesso!', response);
      // Aqui você pode adicionar lógica para redirecionar ou limpar o formulário
    });
  }
}
