import { ContatoService } from './contato.service';
import { Component, EventEmitter, OnChanges, OnInit, Input, SimpleChange ,SimpleChanges, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Contato } from './contatos.model';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: './contato-busca.component.html',
    styles: [`
        .cursor-pointer:hover {
            cursor: pointer;
        }   
    `]

})
export class ContatoBuscaComponent implements OnInit, OnChanges {
    
    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> = new EventEmitter<string>();
    contatos: Observable<Contato[]>;
    private termosDaBusca: Subject<any> = new Subject<any>();
    
    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit(): void { 
        this.contatos = this.termosDaBusca
        .debounceTime(500) //aguarde 500ms para emitir novos eventos
        .distinctUntilChanged() //ignore se o próximo termo de busca for igual ao anterior
        .switchMap(termo =>  termo ? this.contatoService.buscaContatoPorNome(termo) : Observable.of<Contato[]>([]))
        .catch(err => {
            console.log(err);
            return Observable.of<Contato[]>([]);
        });

        this.contatos.subscribe((contatos: Contato[]) => {
            console.log('retornou do servidor:', contatos)
        });
    }


    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    search(termo: string): void {
        this.termosDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }

    verDetalhe(contato: Contato){
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    }
}
