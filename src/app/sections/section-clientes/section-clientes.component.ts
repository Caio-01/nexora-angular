import { Component } from '@angular/core';

@Component({
  selector: 'app-section-clientes',
  templateUrl: './section-clientes.component.html',
  styleUrl: './section-clientes.component.scss',
})
export class SectionClientesComponent {
  constructor() {}

  // Logos imgs
  logos: Array<any> = [
    { img: 'assets/ClienteLogoOne.svg', alt: 'ClienteLogoOne' },
    { img: 'assets/ClienteLogoTwo.svg', alt: 'ClienteLogoTwo' },
    { img: 'assets/ClienteLogoThree.svg', alt: 'ClienteLogoThree' },
    { img: 'assets/ClienteLogoFour.svg', alt: 'ClienteLogoFour' },
    { img: 'assets/ClienteLogoFive.svg', alt: 'ClienteLogoFive' },
    { img: 'assets/ClienteLogoSix.svg', alt: 'ClienteLogoSix' },
  ];
}
