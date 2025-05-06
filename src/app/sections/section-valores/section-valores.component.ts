import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registrando o plugin para usar o SrollTrigger
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
export class SectionValoresComponent implements AfterViewInit {
  constructor() {}

  // Vai acessar o elementos do DOM com base na referencia
  @ViewChildren('cards') cards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    // Percorre a lista de Cards e extrai de cada item o nativeElement
    const allCards = this.cards.toArray().map((el) => el.nativeElement);

    gsap.fromTo(
      allCards,
      {
        opacity: 0,
        y: '10%',
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.containerCardValores',
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      }
    );
  }

  // Cards Valores
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
