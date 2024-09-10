import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizacao',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Visualização</h2>
    <p>Aqui você pode visualizar os detalhes do formulário enviado.</p>
  `,
})
export class VisualizacaoComponent {}
