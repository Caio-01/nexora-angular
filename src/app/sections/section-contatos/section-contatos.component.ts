import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// Interface para tipar os Cards de Contatos
interface CardContatos {
  img: string;
  imgAlt: string;
  title: string;
  text: string;
}
@Component({
  selector: 'app-section-contatos',
  templateUrl: './section-contatos.component.html',
  styleUrl: './section-contatos.component.scss',
})
export class SectionContatosComponent implements OnInit {
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  // Lista de objetos 'CardContatos'
  cardContatos: Array<CardContatos> = [
    {
      img: 'assets/WhatsApp.svg',
      imgAlt: 'WhatsApp.svg',
      title: 'WhatsApp',
      text: 'Comunicação Rápida',
    },
    {
      img: 'assets/Instagram.svg',
      imgAlt: 'Instagram.svg',
      title: 'Instagram',
      text: 'Imagem e Estilo',
    },
    {
      img: 'assets/LinkedIn.svg',
      imgAlt: 'LinkedIn.svg',
      title: 'LinkedIn',
      text: 'Rede Profissional',
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
    this.toastr.success('Breve entraremos em contato!', 'Enviado com Sucesso!');
    this.contatosForm.reset();
  }
}
