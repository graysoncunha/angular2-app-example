import { NgModule } from '@angular/core';
import { ContatosListaComponent } from "./contatos-lista.component";
import { ContatoDetalheComponent } from "./contato-detalhe.component";
import { CommonModule } from "@angular/common";
import { ContatoRoutingModule } from "./contato-routing.module";
import { ContatoService } from "./contato.service";

@NgModule({
    imports:[
        ContatoRoutingModule,
        CommonModule
    ],
    declarations: [
        ContatoDetalheComponent,
        ContatosListaComponent
    ],
    exports: [
        ContatosListaComponent
    ],
    providers: [
        ContatoService
    ]
})
export class ContatosModule{

}