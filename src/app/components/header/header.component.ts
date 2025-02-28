import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
} from '@angular/core';

interface Link {
  url: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('menuAnimation', [
      state('closed', style({ opacity: 0, transform: 'scale(0.8)' })),
      state('open', style({ opacity: 1, transform: 'scale(1)' })),

      transition('closed => open', [animate('200ms ease-in-out')]),
      transition('open => closed', [animate('200ms ease-in-out')]),
    ]),
  ],
})
export class HeaderComponent {
  // Evento para emitir a seção
  @Output() scrollTo = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {}

  openModalNav: boolean = false;

  // Lista para os Links
  links: Array<Link> = [
    { label: 'Home', url: 'welcome' },
    { label: 'Valores', url: 'valores' },
    { label: 'Sobre', url: 'sobre' },
    { label: 'Serviços', url: 'servicos' },
    { label: 'Clientes', url: 'clientes' },
    { label: 'Contatos', url: 'contatos' },
  ];

  // Metódo para emitir o evento com o nome da seção
  onScrollToSection(id: string) {
    this.scrollTo.emit(id);
    this.openModalNav = false;
  }

  // Metódo para clicar e abrir menu em tela mobile
  onClickMenuBurger() {
    this.openModalNav = true;
  }

  // Método para fechar ao clicar fora do menu
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.openModalNav &&
      !this.elementRef.nativeElement.contains(event.target)
    ) {
      this.openModalNav = false;
    }
  }
}
