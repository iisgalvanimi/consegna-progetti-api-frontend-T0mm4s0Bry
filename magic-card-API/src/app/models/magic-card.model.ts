export interface MagicCard {
    name: string;
    image_uris?: {
      normal: string;
    };
    mana_cost: string;
    type_line: string;
    oracle_text: string;
  }
  