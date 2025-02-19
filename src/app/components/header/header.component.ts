import { Component, Output, EventEmitter } from '@angular/core';

interface Link {
  url: string;
  label: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // Evento para emitir a seção
  @Output() scrollTo = new EventEmitter<string>();

  constructor() {}

  // Lista para os Links
  links: Array<Link> = [
    { label: 'Home', url: '/home' },
    { label: 'Valores', url: '/valores' },
    { label: 'Sobre', url: '/sobre' },
    { label: 'Serviços', url: '/servicos' },
    { label: 'Clientes', url: '/clientes' },
    { label: 'Contatos', url: '/contatos' },
  ];

  // Metódo para emitir o evento com o nome da seção
  onScrollToSection(id: string) {
    this.scrollTo.emit(id);
  }
}
