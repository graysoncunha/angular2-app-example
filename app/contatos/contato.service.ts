import { ServiceInterface } from './../interfaces/service.interface';
import { Injectable } from '@angular/core';
import { Contato } from "./contatos.model";
import { CONTATOS } from "./contatos-mock";
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContatoService implements ServiceInterface<Contato> {

    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });

    private contatosUrl: string = 'app/contatos';

    constructor(
        private http: Http
    ) { }

    findAll(): Promise<Contato[]> {
        return this.http.get(this.contatosUrl)
            .toPromise()
            .then(response => response.json().data as Contato[]);
    }

    find(id: number): Promise<Contato> {
        return this.findAll()
            .then((contatos: Contato[]) => contatos.find((contato) => contato.id === id));
    }

    create(contato: Contato): Promise<Contato> {
        return this.http
            .post(this.contatosUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then((response: Response) => {
                console.log(response.json().data);
                return response.json().data as Contato;
            })
            .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    delete(contato:Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

    buscaContatoPorNome(termo: string): Observable<Contato[]> {
        return this.http
        .get(`${this.contatosUrl}/?nome=${termo}`)
        .map((res: Response) => res.json().data as Contato[]);
    }

}