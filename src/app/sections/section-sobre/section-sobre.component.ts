import { Component } from '@angular/core';

interface Icons {
  svg: string;
  textIcon: string;
}
@Component({
  selector: 'app-section-sobre',
  templateUrl: './section-sobre.component.html',
  styleUrl: './section-sobre.component.scss',
})
export class SectionSobreComponent {
  constructor() {}

  // Lista de Icons
  icons: Array<Icons> = [
    { svg: 'groups', textIcon: 'Equipe Qualificada' },
    { svg: 'engineering', textIcon: 'Soluções Eficazes' },
    { svg: 'psychology', textIcon: 'Ampla Experiência' },
    { svg: 'trending_up', textIcon: 'Qualidade e Precisão' },
  ];
}
