import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}
  // ViewChild para pegar a referência no html e armazenar na variável
  @ViewChild('welcome', { read: ElementRef }) welcome!: ElementRef;
  @ViewChild('valores', { read: ElementRef }) valores!: ElementRef;
  @ViewChild('sobre', { read: ElementRef }) sobre!: ElementRef;
  @ViewChild('servicos', { read: ElementRef }) servicos!: ElementRef;
  @ViewChild('clientes', { read: ElementRef }) clientes!: ElementRef;

  // @ViewChild('box', { static: true })
  // box!: ElementRef<HTMLDivElement>;

  // ngAfterViewInit(): void {
  //   gsap.fromTo(
  //     this.box.nativeElement,
  //     { opacity: 0 },
  //     { opacity: 1, duration: 5 }
  //   );
  // }

  // ngAfterViewInit(): void {
  //   console.log(
  //     this.welcome,
  //     this.valores,
  //     this.sobre,
  //     this.servicos,
  //     this.clientes
  //   );
  // }

  // Método que recebe o nome da seção e faz o scroll animado
  scrollToSection(section: string) {
    let element: ElementRef | undefined;

    switch (section) {
      case 'welcome':
        element = this.welcome;
        break;

      case 'valores':
        element = this.valores;
        break;
      case 'sobre':
        element = this.sobre;
        break;
      case 'servicos':
        element = this.servicos;
        break;
      case 'clientes':
        element = this.clientes;
        break;
    }

    // Verificando se o element foi definido
    if (element) {
      element.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }

    // console.log('Teste de Clique', section);
  }
}
