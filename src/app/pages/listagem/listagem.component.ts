import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Listagem</h2>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `,
})
export class ListagemComponent {}
