import { Component } from '@angular/core';

interface Valores {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-section-valores',
  templateUrl: './section-valores.component.html',
  styleUrl: './section-valores.component.scss',
})
export class SectionValoresComponent {
  constructor() {}

  cardValores: Array<Valores> = [
    {
      icon: 'flag',
      title: 'Objetivo',
      description:
        'Entregar projetos eficientes, com qualidade e pontualidade.',
    },
    {
      icon: 'query_stats',
      title: 'Meta',
      description:
        'Ser referência em inovação e sustentabilidade na construção.',
    },
    {
      icon: 'handshake',
      title: 'Compromisso',
      description: 'Tecnologia avançada e práticas sustentáveis.',
    },
  ];
}
