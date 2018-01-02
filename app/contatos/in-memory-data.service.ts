import { Contato } from './contatos.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    
    createDb(): {} {

        let contatos: Contato[] = [
            {id: 1, nome: "Fulano de Tal", email: 'fulano@gmail.com', telefone: '(00) 0000-0000'},
            {id: 2, nome: "Ciclano", email: 'ciclano@gmail.com', telefone: '(00) 0000-0000'},
            {id: 3, nome: "Escatamaquio", email: 'escatamaquio@gmail.com', telefone: '(00) 0000-0000'},
            {id: 4, nome: "Seu Madruga", email: 'madruga@gmail.com', telefone: '(00) 0000-0000'},
            {id: 5, nome: "Bob Esponja", email: 'bob@gmail.com', telefone: '(00) 0000-0000'}
        ];

        return contatos;
    }

}