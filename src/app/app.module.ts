import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { MatheusComponent } from './matheus/matheus.component';
import { MatheusListaComponent } from './matheus-lista/matheus-lista.component';
import { MatheusDetalhesComponent } from './matheus-detalhes/matheus-detalhes.component';
import { MatheusDisciplinasService } from './matheus-disciplinas.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MatheusComponent },
      { path: 'lista', component: MatheusListaComponent },
      { path: 'lista/:index', component: MatheusDetalhesComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MatheusComponent,
    MatheusListaComponent,
    MatheusDetalhesComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MatheusDisciplinasService],
})
export class AppModule {}
