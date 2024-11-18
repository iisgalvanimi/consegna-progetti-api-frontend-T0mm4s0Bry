import { Component } from '@angular/core';
import { MagicCardService } from '../services/magic-card.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  selectedYear: string = '';
  cards: any[] = [];

  constructor(private cardService: MagicCardService) {}

 
  onYearChange(): void {
    if (!this.selectedYear) {
      console.error('Anno non selezionato.');
      return;
    }

    this.cardService.getCardsByYear(this.selectedYear).subscribe(
      (data: any) => this.cards = data.data,
      (error: any) => console.error('Errore nel recupero del catalogo:', error)
    );
  }
}
