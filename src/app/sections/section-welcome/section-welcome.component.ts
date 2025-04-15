import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-section-welcome',
  templateUrl: './section-welcome.component.html',
  styleUrl: './section-welcome.component.scss',
})
export class SectionWelcomeComponent implements AfterViewInit {
  constructor() {}

  // Vai acessar o elementos do DOM com base na referencia
  @ViewChild('textWelcome') textWelcome!: ElementRef;

  // Chamado após o template renderizar completamente o view do componente
  ngAfterViewInit(): void {
    gsap.fromTo(
      this.textWelcome.nativeElement,
      {
        opacity: 0,
        y: '10%',
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power4.out',
      }
    );
  }
}
