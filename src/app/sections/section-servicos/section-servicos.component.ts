import { Component } from '@angular/core';

interface Card {
  icon: string;
  title: string;
  paragraph: string;
}

@Component({
  selector: 'app-section-servicos',
  templateUrl: './section-servicos.component.html',
  styleUrl: './section-servicos.component.scss',
})
export class SectionServicosComponent {
  constructor() {}

  // Lista de Cards
  cards: Array<Card> = [
    {
      icon: 'construction',
      title: 'Obra Civil',
      paragraph:
        'Soluções completas em obras civis, com qualidade, segurança e eficiência em construção e reforma.',
    },
    {
      icon: 'cleaning_services',
      title: 'Limpeza',
      paragraph:
        'Serviços completos de limpeza, com qualidade, segurança e eficiência para ambientes impecáveis e higienizados.',
    },
    {
      icon: 'front_loader',
      title: 'Pavimentação',
      paragraph:
        'Serviços de pavimentação, com qualidade, segurança e eficiência para superfícies resistentes e duráveis.',
    },
    {
      icon: 'security',
      title: 'Segurança',
      paragraph:
        'Serviços de segurança com qualidade, confiabilidade e eficiência para proteção completa do seu patrimônio.',
    },
    {
      icon: 'settings_backup_restore',
      title: 'Recuperação',
      paragraph:
        'Serviços de recuperação com excelência, confiabilidade e eficácia para restaurar seu patrimônio.',
    },
  ];
}
