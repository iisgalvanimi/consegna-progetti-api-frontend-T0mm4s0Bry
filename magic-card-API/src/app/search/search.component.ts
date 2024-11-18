import { Component } from '@angular/core';
import { MagicCardService } from '../services/magic-card.service';
import { MagicCard } from '../models/magic-card.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';
  cardData: MagicCard | null = null;

  constructor(private cardService: MagicCardService) {}

  searchCard(): void {
    this.cardService.searchCardByName(this.searchQuery).subscribe(
      (data: MagicCard) => this.cardData = data, // Aggiunto tipo esplicito
      (error: any) => console.error('Errore nella ricerca della carta:', error) // Aggiunto tipo esplicito
    );
  }
}
