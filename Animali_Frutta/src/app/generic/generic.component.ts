import { ActivatedRoute, ParamMap } from "@angular/router";
import { Animali, Emoji, Frutta } from "../emoji";

export class GenericComponent{
  //Crea un vettore di tipo Emoji e lo inizializza
  genVect : Emoji[]= [{name:"", emoji:""}];
  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute) {
    //Gestisce i cambi di route con l'observable paramMap
    this.route.paramMap.subscribe(this.getRouterParam);
  }
 
  //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); 
    console.log (uri_param); 
    
    if (uri_param == 'fruits') this.genVect = Frutta;
    if (uri_param == 'animals') this.genVect = Animali;
  }
}