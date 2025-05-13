import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
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
export class SectionContatosComponent implements OnInit, AfterViewInit {
  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  @ViewChild('containerContatos') containerContatos!: ElementRef;

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

  // Método para inicializar a animacao do GSAP
  ngAfterViewInit(): void {
    gsap.fromTo(
      this.containerContatos.nativeElement,
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
          trigger: '.containerContatos',
          start: 'top 70%',
          //markers: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }

  // Funcão chamada para enviar o formulario
  submitEmail() {
    this.toastr.success('Breve entraremos em contato!', 'Enviado com Sucesso!');
    this.contatosForm.reset();
  }
}
