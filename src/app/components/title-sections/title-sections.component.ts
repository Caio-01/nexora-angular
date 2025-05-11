import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); // Registrando o plugin para usar o SrollTrigger

@Component({
  selector: 'app-title-sections',
  templateUrl: './title-sections.component.html',
  styleUrl: './title-sections.component.scss',
})
export class TitleSectionsComponent implements AfterViewInit {
  constructor() {}

  @Input() title: string = '';

  // Vai acessar o elementos do DOM com base na referencia
  @ViewChild('titleComponent') titleComponent!: ElementRef;

  ngAfterViewInit(): void {
    gsap.fromTo(
      this.titleComponent.nativeElement,
      {
        opacity: 0,
        y: '10%',
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: this.titleComponent.nativeElement,
          start: 'top 60%',
          toggleActions: 'play reverse play reverse',
          //markers: true,
        },
      }
    );
  }
}
