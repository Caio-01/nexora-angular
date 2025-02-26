import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionClientesComponent } from './sections/section-clientes/section-clientes.component';
import { TitleSectionsComponent } from './components/title-sections/title-sections.component';
import { SectionServicosComponent } from './sections/section-servicos/section-servicos.component';
import { SectionSobreComponent } from './sections/section-sobre/section-sobre.component';
import { SectionValoresComponent } from './sections/section-valores/section-valores.component';
import { SectionWelcomeComponent } from './sections/section-welcome/section-welcome.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SectionClientesComponent,
    TitleSectionsComponent,
    SectionServicosComponent,
    SectionSobreComponent,
    SectionValoresComponent,
    SectionWelcomeComponent,
    ButtonComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
