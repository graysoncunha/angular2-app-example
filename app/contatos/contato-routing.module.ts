import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { ContatosListaComponent } from "./contatos-lista.component";
import { ContatoDetalheComponent } from "./contato-detalhe.component";

//Vetor constant com o caminho para seus respectivos component
const contatoRoutes: Routes = [
    {
        path:'contato',
        component: ContatosListaComponent
    },
    {
        path: 'contato/save',
        component: ContatoDetalheComponent
    },
    {
        path: 'contato/save/:id',
        component: ContatoDetalheComponent
    }

];

@NgModule({
    imports:[
        //Starta as rotas para o módulo de contatos, com as segintes rotas passada por parâmetros
        RouterModule.forChild(contatoRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContatoRoutingModule{}