import { Contato } from './contatos.model';
import { ContatoService } from './contato.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalhe.component.html'

})
export class ContatoDetalheComponent implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor(
        private contatoService: ContatoService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        console.log('on init');

        this.contato = new Contato(0, '', '', '');

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            console.log(id);

            if (id) {

                this.isNew = false;

                this.contatoService.getContato(id)
                    .then((contato: Contato) => {
                        this.contato = contato;
                    })
            }
        });
    }

    teste(): void {
        console.log(this.contato);
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): any {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): any {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit(): void {
        if(this.isNew){
            console.log('cadastrar contato');
        }
        else{
            console.log('alterar contato');
        }
    }

}