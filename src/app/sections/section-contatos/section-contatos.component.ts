import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Interface para tipar os Cards de Contatos
interface CardContatos {
  img: string;
  imgAlt: string;
  text: string;
}
@Component({
  selector: 'app-section-contatos',
  templateUrl: './section-contatos.component.html',
  styleUrl: './section-contatos.component.scss',
})
export class SectionContatosComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  // Lista de objetos 'CardContatos'
  cardContatos: Array<CardContatos> = [
    {
      img: 'assets/WhatsApp.svg',
      imgAlt: 'WhatsApp.svg',
      text: 'WhatsApp',
    },
    {
      img: 'assets/Instagram.svg',
      imgAlt: 'Instagram.svg',
      text: 'Instagram',
    },
    {
      img: 'assets/LinkedIn.svg',
      imgAlt: 'LinkedIn.svg',
      text: 'LinkedIn',
    },
  ];

  // Form Contatos
  contatosForm!: FormGroup;

  // Método chamado ao inicializar o componente
  ngOnInit(): void {
    // Inicializa o formulário com o campo 'email', que começa vazio e tem a validação
    this.contatosForm = this.fb.group({
      email: ['', [Validators.email]],
    });
  }

  // Funcão chamada para enviar o formulario
  submitEmail() {
    alert('Enviado com Sucesso, Breve entraremos em contato!');
    this.contatosForm.reset();
  }
}
