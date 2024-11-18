import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MagicCard } from '../models/magic-card.model';

@Injectable({
  providedIn: 'root',
})
export class MagicCardService {
  private baseUrl = 'https://api.scryfall.com/cards';

  constructor(private http: HttpClient) {}

  // Metodo per ottenere una carta per nome
  getCard(name: string): Observable<MagicCard> {
    return this.http.get<MagicCard>(`${this.baseUrl}/named?exact=${name}`);
  }

  // Metodo per ottenere carte filtrate per anno
  getCardsByYear(year: string): Observable<any> {
    const url = `${this.baseUrl}/search?q=year:${year}`;
    return this.http.get<any>(url);
  }

  // Metodo per cercare una carta per nome
  searchCardByName(name: string): Observable<MagicCard> {
    return this.http.get<MagicCard>(`${this.baseUrl}/named?fuzzy=${name}`);
  }
}

