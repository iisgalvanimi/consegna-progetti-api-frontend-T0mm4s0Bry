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


  getCard(name: string): Observable<MagicCard> {
    return this.http.get<MagicCard>(`${this.baseUrl}/named?exact=${name}`);
  }

  getCardsByYear(year: string): Observable<any> {
    const url = `${this.baseUrl}/search?q=year:${year}`;
    return this.http.get<any>(url);
  }

  searchCardByName(name: string): Observable<MagicCard> {
    return this.http.get<MagicCard>(`${this.baseUrl}/named?fuzzy=${name}`);
  }
}

