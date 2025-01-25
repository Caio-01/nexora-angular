import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-sections',
  templateUrl: './title-sections.component.html',
  styleUrl: './title-sections.component.scss',
})
export class TitleSectionsComponent {
  constructor() {}

  @Input() title: string = '';
}
