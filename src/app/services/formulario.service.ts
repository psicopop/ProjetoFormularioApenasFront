import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Modelo da interface com os campos que sua API retorna
export interface Formulario {
  id: number;
  nomes: string;
  cpf: string;
  telefone: number;
}

@Injectable({
  providedIn: 'root',
})
export class FormularioService {
  private apiUrl = 'http://localhost:8080/api/formulario'; // URL da sua API

  constructor(private http: HttpClient) {}

  // Método para buscar todos os formulários (GET)
  getFormularios(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(this.apiUrl);
  }

  // Método para criar um novo formulário (POST)
  createFormulario(formulario: Formulario): Observable<Formulario> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Formulario>(this.apiUrl, formulario, { headers });
  }

  // Método para excluir um formulário pelo ID (DELETE)
  deleteFormulario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
