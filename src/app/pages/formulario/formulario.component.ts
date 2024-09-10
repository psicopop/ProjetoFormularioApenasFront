import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Formulário</h2>
    <form>
      <label for="nome">Nome:</label>
      <input id="nome" type="text" />
      <button type="submit">Enviar</button>
    </form>
  `,
})
export class FormularioComponent {}
