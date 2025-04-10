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
import { SectionContatosComponent } from './sections/section-contatos/section-contatos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FooterComponent } from './components/footer/footer.component';

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
    SectionContatosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
