import { Injectable } from  '@angular/core';
import { Contato } from "./contatos.model";
import { CONTATOS } from "./contatos-mock";


@Injectable()
export class ContatoService{

    getContatos(): Promise<Contato[]>{
        return Promise.resolve(CONTATOS);
    }

    getContatosSlowly(): Promise<Contato[]>{
        return new Promise((resolve, reject) =>{
            setTimeout(resolve, 2000);
        })
    .then(() => {console.log("Primeiro then");
        return  "Curso Angular 2 Plinio Naves";
    })
    .then((param:string) => {
        console.log("segundo then");
        console.log(param);

        return new Promise((resolve2, reject2) => {
            setTimeout(() => {
                console.log("Continuando depois de 4 segundos...");
                resolve2();
            }, 4000)
        })
    })
    .then(() => {
            console.log("terceiro then");
        return this.getContatos();
    });


}

}