import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionClientesComponent } from './sections/section-clientes/section-clientes.component';
import { TitleSectionsComponent } from './components/title-sections/title-sections.component';

@NgModule({
  declarations: [AppComponent, SectionClientesComponent, TitleSectionsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
