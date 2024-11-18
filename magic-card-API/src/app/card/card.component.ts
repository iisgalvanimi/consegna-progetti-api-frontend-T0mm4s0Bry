import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MagicCardService } from '../services/magic-card.service';
import { MagicCard } from '../models/magic-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardName: string = '';
  cardData: MagicCard | null = null;

  constructor(
    private route: ActivatedRoute,
    private cardService: MagicCardService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cardName = params['name'];
      this.fetchCardData();
    });
  }

  fetchCardData(): void {
    this.cardService.getCard(this.cardName).subscribe(
      (data: MagicCard) => this.cardData = data,
      (error: any) => console.error('Errore nel recupero della carta:', error)
    );
  }
}
