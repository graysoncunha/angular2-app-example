import { NgModule } from '@angular/core';
import { ContatosListaComponent } from "./contatos-lista.component";
import { ContatoDetalheComponent } from "./contato-detalhe.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from  '@angular/forms';
import { ContatoRoutingModule } from "./contato-routing.module";
import { ContatoService } from "./contato.service";
import { ContatoBuscaComponent } from './contato-busca.component';

@NgModule({
    imports:[
        ContatoRoutingModule,
        CommonModule,
        FormsModule
    ],
    declarations: [
        ContatoBuscaComponent,
        ContatoDetalheComponent,
        ContatosListaComponent
    ],
    exports: [
        ContatoBuscaComponent,
        ContatosListaComponent
    ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule{

}