import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  listItems: string[] = [
    'Paiements rapides et sécurisés',
    'Gestion de trésorerie en temps réel',
    'Investissements intelligents',
    'Automatisation des finances',
    'Tableau de bord analytique',
  ];
}
