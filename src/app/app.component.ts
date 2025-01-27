import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'landing-page';

  // @ViewChild('box', { static: true })
  // box!: ElementRef<HTMLDivElement>;

  // ngAfterViewInit(): void {
  //   gsap.fromTo(
  //     this.box.nativeElement,
  //     { opacity: 0 },
  //     { opacity: 1, duration: 5 }
  //   );
  // }
}
