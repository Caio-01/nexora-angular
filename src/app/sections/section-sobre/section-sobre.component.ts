import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
interface Icons {
  svg: string;
  textIcon: string;
}
@Component({
  selector: 'app-section-sobre',
  templateUrl: './section-sobre.component.html',
  styleUrl: './section-sobre.component.scss',
})
export class SectionSobreComponent implements AfterViewInit {
  constructor() {}

  // Vai acessar o elementos do DOM com base na referencia
  @ViewChild('title') title!: ElementRef;
  @ViewChild('aboutImg') aboutImg!: ElementRef;
  @ViewChild('aboutSvg') aboutSvg!: ElementRef;
  @ViewChild('containerTextAbout') containerTextAbout!: ElementRef;

  ngAfterViewInit(): void {
    // Title h1
    gsap.to(this.title.nativeElement, {
      opacity: 1,
      right: '2em',
      duration: 0.6,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.aboutContainer',
        start: 'top 60%',
        // markers: true,
        toggleActions: 'play reverse play reverse',
      },
    });

    // img About
    gsap.fromTo(
      this.aboutImg.nativeElement,
      {
        opacity: 0,
        x: '-10%',
      },
      {
        opacity: 1,
        x: '0%',
        duration: 0.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.aboutContainer',
          start: 'top 60%',
          toggleActions: 'play reverse play reverse',
          // markers: true,
        },
      }
    );

    // svg img About
    gsap.to(this.aboutSvg.nativeElement, {
      opacity: 1,
      left: '20px',
      duration: 0.6,
      delay: 0.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.aboutContainer',
        start: 'top 60%',
        // markers: true,
        toggleActions: 'play reverse play reverse',
      },
    });
  }

  // Lista de Icons
  icons: Array<Icons> = [
    { svg: 'groups', textIcon: 'Equipe Qualificada' },
    { svg: 'engineering', textIcon: 'Soluções Eficazes' },
    { svg: 'psychology', textIcon: 'Ampla Experiência' },
    { svg: 'trending_up', textIcon: 'Qualidade e Precisão' },
  ];
}
