import { Component } from '@angular/core';

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
}
